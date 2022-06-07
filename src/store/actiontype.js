import { Add, Division, Multi, Substrack } from "./action"

export const AddFun=(value)=>{
   return {type:Add, payLoad:Number(value)};
}

export const SubstrackFun=(value)=>{
  return {type:Substrack, payLoad:Number(value)}
}

export const MultiFun=(value)=>{
    return {type:Multi, payLoad:Number(value)}
}

export const DivisionFun=(value)=>{
    return {type:Division, payLoad:Number(value)}
}