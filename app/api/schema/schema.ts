import { z } from "zod";

export const schema = z.object({
  company : z.string(),
  url : z.string(),
  hiring : z.boolean(),
  event_name : z.string(),
  event_detail : z.string(),
  target_student : z.string(),
  recruit_begin : z.string(),
  recruit_end : z.string(),
  tech_stack : z.string(),
  remote : z.string()  
})
//TODO: nullable fields は入れてない