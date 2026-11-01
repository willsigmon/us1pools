"""Optional asset preparation: python3 scripts/prepare-assets.py (requires Pillow).

Inputs are committed originals in assets/live. No network access required.
Fonts are self-hosted Google Fonts Latin WOFF2 files; licenses accompany them.
"""
from pathlib import Path
import json
from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent.parent
LIVE = ROOT / 'assets/live'
THUMBS = ROOT / 'assets/thumbs'
THUMBS.mkdir(exist_ok=True)
(ROOT / 'assets/og').mkdir(exist_ok=True)
manifest = json.loads((LIVE / 'manifest.json').read_text())
emblems = ('e2bf0920', '6b1cf7df', '78992bbd')
for filename, dimensions in manifest.items():
    widths = (160, 320, 480, 960) if filename.startswith(emblems) else (480, 768, 960)
    for width in widths:
        if dimensions['w'] <= width:
            continue
        with Image.open(LIVE / filename) as original:
            resized = original.copy()
            resized.thumbnail((width, 9999), Image.Resampling.LANCZOS)
            resized.save(THUMBS / f'{Path(filename).stem}-{width}.webp', quality=72, method=6)

logo = Image.open(LIVE / 'e2bf0920-us-1-pools-og-logo.webp').convert('RGBA')
hero = ImageOps.fit(Image.open(LIVE / 'hero-yt.webp').convert('RGB'), (1200, 630)).convert('RGBA')
hero = Image.alpha_composite(hero, Image.new('RGBA', (1200, 630), (11, 37, 69, 55)))
ImageDraw.Draw(hero).rounded_rectangle((310, 145, 890, 485), radius=8, fill=(250, 252, 250, 244))
logo.thumbnail((500, 275), Image.Resampling.LANCZOS)
hero.alpha_composite(logo, ((1200-logo.width)//2, (630-logo.height)//2))
hero.convert('RGB').save(ROOT / 'assets/og/us1pools-og.jpg', quality=90, optimize=True)

icon = Image.new('RGBA', (256, 256), (250, 252, 250, 255))
logo = Image.open(LIVE / 'e2bf0920-us-1-pools-og-logo.webp').convert('RGBA')
logo.thumbnail((240, 240), Image.Resampling.LANCZOS)
icon.alpha_composite(logo, ((256-logo.width)//2, (256-logo.height)//2))
icon.save(ROOT / 'assets/favicon.png')
icon.save(ROOT / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print('Prepared responsive WebP images, 1200×630 social image and logo favicons.')
