import { registerAs } from '@nestjs/config';

export default registerAs('multer', () => ({
  multerPath: process.env.MULTER_PATH,
}));
