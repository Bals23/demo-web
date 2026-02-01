export default function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, email, mensaje } = req.body;

    console.log("Nuevo mensaje:");
    console.log(nombre, email, mensaje);

    return res.status(200).json({
      ok: true,
      message: "Datos recibidos correctamente"
    });
  }

  res.status(405).json({ error: "Método no permitido" });
}
