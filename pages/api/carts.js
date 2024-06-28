import { deleteCartProduct } from "@/api";

export default async function handler(req, res) {
  const id = req.body.id;
  const { data } = await deleteCartProduct({ id });

  res.status(200).send(`${data.name}이/가 삭제되었습니다.`);
}
