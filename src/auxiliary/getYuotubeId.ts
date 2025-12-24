export const getYouTubeId = (url: string): string | null => {
  const regExp =
    /(?:youtube\.com\/(?:.*v=|v\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};
