import { ContainerClient } from "@azure/storage-blob";

export const VIDEOS_CONTAINER_URL =
  "https://memcapsules.blob.core.windows.net/videos";

const SAS_TOKEN =
  "sp=racwdli&st=2022-10-16T11:26:22Z&se=2030-10-16T19:26:22Z&spr=https&sv=2021-06-08&sr=c&sig=Y2spl1OvV1Yfww2Usv0CcSAHMrWg0dbs8%2B%2BEY2rboFA%3D";

export const videosContainerClient = new ContainerClient(
  `${VIDEOS_CONTAINER_URL}?${SAS_TOKEN}`
);
