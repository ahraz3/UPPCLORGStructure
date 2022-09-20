import React from 'react'
import OrgTree from 'react-org-tree';

export default function OrganisationTree() {

    const horizontal = false; 
    const collapsable = true; 
    const expandAll = true;

    const data = {
      id: 0,
      label: 'Chairman',
      children: [{
          id: 1,
          label: 'MD UPPCL',
          children: [{
              id: 4,
              label: 'Director Commercial'
          }, {
              id: 5,
              label: 'Director Technical'
          }, {
              id: 6,
              label: 'Director PM & A'
          },{
            id: 6,
            label: 'Director IT',
            children: [{
              id: 6,
              label: 'Manish Sandilya'
        },{
          id: 6,
          label: 'Abhishek Verma'
    }]
      }, 
      {
        id: 6,
        label: 'Director Finance'
  }]
     
  }]
};

console.log(data);
const dataArr = [
      {ID: '18', label: 'reset password', parentid: '30', parentname: 'user management'}, 
      {ID: '13', label: 'audit log', parentid: '29', parentname: 'system management'}, 
      {ID: '29', label: 'system management', parentid: '0', parentname: null}, 
      {ID: '14', label: 'modify', parentid: '33', parentname: 'department management'}, 
      {ID: '2', label: 'user list', parentid: '30', parentname: 'user management'}, 
      {ID: '30', label: 'user management', parentid: '29', parentname: 'system management'}, 
      {ID: '33', label: 'department management', parentid: '33', parentname: null}, 
      {ID: '37', label: 'Add User', parentid: '30', parentname: 'user management'}, 
      {ID: '6', label: 'Add', parentid: '33', parentname: 'department management'}, 
      {ID: '7', label: 'Delete', parentid: '33', parentname: 'department management'}
  ]
  
  //Create mapping relationship of menu ID
  const idMapping = dataArr.reduce((prev, next, i) => {
    prev[next.ID] = i
    return prev
  }, {})
  
  const treeData = []
  
  dataArr.map(el => {
      //First level menu
      if (el.parentid === '0') {
          treeData.push(el)
          return
      }
      
      //Find parent element by mapping
      const parentEl = dataArr[idMapping[el.parentid]] 
  
      //Add the current element to the 'children' array of the parent element
      parentEl.children = [...(parentEl.children || []), el]
  })
  
  console.log(treeData[0])
  

  return (
    <div>
      <OrgTree
    data={treeData[0]}
    horizontal={horizontal}
    collapsable={collapsable}
    expandAll={expandAll}
   ></OrgTree>
      
    </div>
  )
}
