export interface Skill { name:string; level:number; }
export interface Experience {
  role:string; company:string; from:string; to?:string; notes?:string;
}
export interface DownloadLink { label:string; url:string; }
export interface SocialLink { label:string; url:string; icon:string; }