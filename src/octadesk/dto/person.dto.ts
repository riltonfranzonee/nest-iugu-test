export class CreatePersonDto {
  readonly email: string;

  readonly thumbUrl?: string;

  readonly customerCode: string;

  readonly isLocked: boolean;

  readonly type: number;

  readonly permissionView: number;

  readonly participantPermission: number;

  readonly roleType: number;

  readonly permissionType: number;
}
