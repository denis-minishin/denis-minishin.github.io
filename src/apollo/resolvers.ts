import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { RESUME_DATA_RU } from "../data/resume-data-ru";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return RESUME_DATA_RU as any;
  }
}
