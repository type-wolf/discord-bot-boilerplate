import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * /v1/getUsers:
 *   get:
 *     description: Retrieve all users from Mongodb
 *     parameters:
 *     responses:
 *       200:
 *         description: success
 *
 */
router.get("/", (req: Request, res: Response) => {
	try {
		res.status(200).json({ userId: "123456789", userName: "Naruto" });
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ message: error.message });
		}
	}
});

router.post("/", (req: Request, res: Response) => {
	try {
		res.status(200).json({ message: "登録しました" });
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ message: error.message });
		}
	}
});

export default router;
