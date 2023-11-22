import {CommonRequest} from './CommonRequest'
import  {BaseURL}  from './BaseURL'

// get all material details
export const getMaterial = async()=>{
    return await CommonRequest("GET",`${BaseURL}/materials`)
 }

 // order material 
export const orderMaterial = async(body)=>{
    return await CommonRequest("POST",`${BaseURL}/ordermaterial`,body)
 }

 // get all order material details
export const getorderMaterial = async()=>{
    return await CommonRequest("GET",`${BaseURL}/ordermaterial`)
 }

 // add material 
export const addMaterial = async(body)=>{
    return await CommonRequest("POST",`${BaseURL}/materials`,body)
 }

 // remove material
export const deleteMaterial = async(id)=>{
    return await CommonRequest("DELETE",`${BaseURL}/materials/${id}`)
 }