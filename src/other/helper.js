import { func } from "prop-types"

export function hideCanvas(){
    try{
        document.getElementById('bgCanvas').style.display = "none"
        document.getElementById('terCanvas').style.display = "none"
      }
      catch(e){

      }
}
export function showCanvas(){
    try{
        normalIndex()
        document.getElementById('bgCanvas').style.display = "block"
        document.getElementById('terCanvas').style.display = "block"  
      }
      catch(e){

      }
}
export function rarityCanvas(){
  try{
    rarityIndex()
   
    document.getElementById('bgCanvas').style.display = "block"
    document.getElementById('terCanvas').style.display = "block"  
  }
  catch(e){

  }
}
export function loreCanvas(){
  try{
    loreIndex()  
    document.getElementById('bgCanvas').style.display = "block"
    document.getElementById('terCanvas').style.display = "none"
  }
  catch(e){

  }
}
function rarityIndex(){
  try{
    document.body.style.backgroundColor =  '#0c0e22'
    document.getElementById('bgCanvas').style.zIndex  = "0"
    document.getElementById('terCanvas').style.zIndex  = "0"  
  }
  catch(e){

  }
}
function loreIndex(){
  try{
    document.body.style.backgroundColor =  '#05004c'
    document.getElementById('bgCanvas').style.zIndex  = "-1"
    document.getElementById('terCanvas').style.zIndex  = "-1"  
  
  }
  catch(e){

  }
}
function normalIndex(){
  try{
    document.body.style.backgroundColor =  '#0c0e22'
    document.getElementById('bgCanvas').style.zIndex  = "1"
    document.getElementById('terCanvas').style.zIndex  = "1"  
  }
  catch(e){

  }
}
