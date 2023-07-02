import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import app from "./app";

const options = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Express TypeScript",
			version: "1.0.0",
		},
	},
	apis: [".src/app.ts", "./src/routes/**/*.ts"],
};
app.use("/swagger-doc", serve, setup(swaggerJSDoc(options)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`[root]: http://localhost:${PORT}\n[swagger]: http://localhost:${PORT}/swagger-doc/`);
});
