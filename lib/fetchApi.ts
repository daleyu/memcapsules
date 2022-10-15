export async function fetchApi<Res>(
  method: "GET" | "PATCH" | "POST",
  body?: any // TODO improve type
): Promise<Res> {
  const res = await fetch("/api/proxy", {
    method,
    ...(body && {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  });
  const json = await res.json();
  return json;
}
