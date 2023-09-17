import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { IMediaResponse } from './media.interface';

@Injectable()
export class MediaService {
	async saveFiles(
		files: Express.Multer.File[],
		folder: string = 'default'
	): Promise<IMediaResponse[]> {
		const uploadFolder = `${path}/uploads/${folder}`;

		await ensureDir(uploadFolder);

		const res: IMediaResponse[] = await Promise.all(
			files.map(async file => {
				await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);

				return {
					url: `http://localhost:8000/uploads/${folder}/${file.originalname}`,
					name: file.originalname
				};
			})
		);

		return res;
	}
}
