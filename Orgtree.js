import React from 'react'
import OrgTree from 'react-org-tree';

export default function Orgtree() {

  const horizontal = false; 
  const collapsable = true; 
  const expandAll = true;

//   const dataArr = [
//     {ID: '18', name: 'reset password', parentid: '30', parentname: 'user management'}, 
//     {ID: '13', name: 'audit log', parentid: '29', parentname: 'system management'}, 
//     {ID: '29', name: 'system management', parentid: '0', parentname: null}, 
//     {ID: '14', name: 'modify', parentid: '33', parentname: 'department management'}, 
//     {ID: '2', name: 'user list', parentid: '30', parentname: 'user management'}, 
//     {ID: '30', name: 'user management', parentid: '29', parentname: 'system management'}, 
//     {ID: '33', name: 'department management', parentid: '0', parentname: null}, 
//     {ID: '37', name: 'Add User', parentid: '30', parentname: 'user management'}, 
//     {ID: '6', name: 'Add', parentid: '33', parentname: 'department management'}, 
//     {ID: '7', name: 'Delete', parentid: '33', parentname: 'department management'}
// ]

// //Create mapping relationship of menu ID
// const idMapping = dataArr.reduce((prev, next, i) => {
//   prev[next.ID] = i
//   return prev
// }, {})

// const treeData = []

// dataArr.map(el => {
//     //First level menu
//     if (el.parentid === '0') {
//         treeData.push(el)
//         return
//     }
    
//     //Find parent element by mapping
//     const parentEl = dataArr[idMapping[el.parentid]] 

//     //Add the current element to the 'children' array of the parent element
//     parentEl.children = [...(parentEl.children || []), el]
// })

// console.log(treeData)

  return (
    <div>
      {/* <OrgTree
    treeData={treeData}
    horizontal={horizontal}
    collapsable={collapsable}
    expandAll={expandAll}
   ></OrgTree>

   Hello World */}
      
    </div>
  )
}
