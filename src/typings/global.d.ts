/// <reference types="node" />

export declare namespace Global{



}

export declare  interface TreeNode{
  data:number
  left?:TreeNode
  right?:TreeNode
}


export declare interface Test{
  name:string
}

declare namespace NodeJS {
  // interface ProcessEnv {
  //   readonly NODE_ENV: 'development' | 'production' | 'test';
  //   readonly PUBLIC_URL: string;
  // }
  export interface TreeNode {
    data:number
    left?:TreeNode
    right?:TreeNode
  }
}