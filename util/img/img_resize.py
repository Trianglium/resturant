import os
from pathlib import Path
from PIL import Image

BASE_DIR = Path(__file__).resolve().parent.parent.parent
IMAGES_DIR = os.path.join(os.path.join(os.path.join(os.path.join(BASE_DIR, 'public'), 'assets'), 'images'), 'food')
