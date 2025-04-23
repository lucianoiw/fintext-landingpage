export const POST = async (request: Request) => {
  const { name, email } = await request.json();

  // Validate the data
  if (!name || !email) {
    return new Response("Invalid data", { status: 400 });
  }

  console.log({ name, email });

  // Send the data to the webhook
  const response = await fetch("https://n8n.89dev.com.br/webhook/fintext", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return new Response("Success", { status: 200 });
  } else {
    return new Response("Error", { status: 500 });
  }
};
