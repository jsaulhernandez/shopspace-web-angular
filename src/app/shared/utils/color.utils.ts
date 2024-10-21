export function extractColor(image: HTMLImageElement): string {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (context) {
    canvas.width = image.width;
    canvas.height = image.height;

    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    if (count > 0) {
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);

      return `${r}, ${g}, ${b}`;
    } else return 'var(--tertiary-color)';
  }

  return 'var(--tertiary-color)';
}
