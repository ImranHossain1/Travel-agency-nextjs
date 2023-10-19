export const fetchJourniesData = async (
  startDate?: string,
  endDate?: string,
  startingPoint?: string,
  endPoint?: string
) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/bus-schedule`;

  // Define query parameters for the URL
  const params = new URLSearchParams();
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);
  if (startingPoint) params.append("startingPoint", startingPoint);
  if (endPoint) params.append("endPoint", endPoint);
  params.append("sortOrder", "desc");
  params.append("sortBy", "startDate");

  const url = `${baseUrl}?${params.toString()}`;
  try {
    const response = await fetch(url, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const rawData = await response.json();

    const { data } = rawData;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
