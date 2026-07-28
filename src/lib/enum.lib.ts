export const enum_otp_action = ['sign_in', 'sign_up'] as const
export const enum_combination_type = ['AND', 'OR'] as const
export const enum_contact_gender = ['male', 'female'] as const
export const enum_contact_country = ['morocco'] as const
export const enum_contact_nationality = ['morocco'] as const
export const enum_contact_city = [
  'tangier',
  'tetouan',
  'fnideq',
  'martil',
  'cabo_negro',
  'm_diq',
  'larache',
  'asilah',
  'chefchaouen',
  'al_hoceima',
  'saidia',
  'kenitra',
  'rabat',
  'sale',
  'temara',
  'mohammedia',
  'casablanca',
  'el_jadida',
  'safi',
  'essaouira',
  'oujda',
  'fez',
  'meknes',
  'errachidia',
  'settat',
  'khouribga',
  'beni_mellal',
  'marrakesh',
  'agadir',
  'ouarzazate',
  'guelmim',
  'laayoune',
  'smara',
  'dakhla',
] as const
export const enum_tenant_type = ['user', 'tenant'] as const
export const enum_access_actions = ['full_access'] as const

// Frontend specific enums
export const enum_file_image_type = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heif',
  'image/heic',
] as const
export const enum_file_video_type = [
  'video/mp4',
  'video/mpeg',
  'video/quicktime',
  'video/x-msvideo',
  'video/webm',
  'video/ogg',
] as const
export const enum_file_audio_type = [
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'audio/mp4',
  'audio/aac',
  'audio/x-m4a',
] as const

export type type_enum_otp_action = (typeof enum_otp_action)[number]
export type type_enum_combination_type = (typeof enum_combination_type)[number]
export type type_enum_contact_gender = (typeof enum_contact_gender)[number]
export type type_enum_contact_country = (typeof enum_contact_country)[number]
export type type_enum_contact_nationality = (typeof enum_contact_nationality)[number]
export type type_enum_contact_city = (typeof enum_contact_city)[number]
export type type_enum_tenant_type = (typeof enum_tenant_type)[number]
export type type_enum_access_actions = (typeof enum_access_actions)[number]

export type type_enum_file_image_type = (typeof enum_file_image_type)[number]
export type type_enum_file_video_type = (typeof enum_file_video_type)[number]
export type type_enum_file_audio_type = (typeof enum_file_audio_type)[number]
