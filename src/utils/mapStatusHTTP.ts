export default function mapStatusHTTP(type: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
  };

  return statusHTTPMap[type];
}