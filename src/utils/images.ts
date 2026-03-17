type CloudinaryImageOptions = {
  width?: number;
  quality?: string | number;
};

const CLOUDINARY_UPLOAD_SEGMENT = "/image/upload/";

export function optimizeCloudinaryImage(
  src: string,
  { width, quality = "auto" }: CloudinaryImageOptions = {}
) {
  if (!src.includes("res.cloudinary.com") || !src.includes(CLOUDINARY_UPLOAD_SEGMENT)) {
    return src;
  }

  const transforms = ["f_auto", `q_${quality}`, "dpr_auto"];

  if (width) {
    transforms.push(`w_${width}`, "c_limit");
  }

  return src.replace(CLOUDINARY_UPLOAD_SEGMENT, `${CLOUDINARY_UPLOAD_SEGMENT}${transforms.join(",")}/`);
}

export function buildCloudinarySrcSet(src: string, widths: number[]) {
  if (!src.includes("res.cloudinary.com") || !src.includes(CLOUDINARY_UPLOAD_SEGMENT)) {
    return undefined;
  }

  return widths
    .map((width) => `${optimizeCloudinaryImage(src, { width })} ${width}w`)
    .join(", ");
}
