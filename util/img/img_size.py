import os
from pathlib import Path
from PIL import Image
from config import IMAGES_DIR

def format_print(*args):
    return f'{args[0]} - w: {args[1]} | h: {args[2]} | ratio: {args[3]}'

def calculate_ratio(w, h):
    return w/h

def find_size(im_path):
    im = Image.open(im_path)
    width, height = im.size
    return width, height


if __name__ == '__main__':
    for img in os.listdir(IMAGES_DIR):
        w, h = find_size(im_path=os.path.join(IMAGES_DIR, img))
        ratio = calculate_ratio(w=w, h=h)
        format_print(img, w, h, ratio)