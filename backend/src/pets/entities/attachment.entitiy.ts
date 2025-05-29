export class AttachmentEntity {
  id: number;
  petId: number;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  fileType: string;

  constructor(partial: Partial<AttachmentEntity>) {
    Object.assign(this, partial);
  }
}
