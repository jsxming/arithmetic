// insertVertex(x)  // 向图中插入新的顶点
// allNeightbors(x)  // 与顶点x邻接的所有节点
// addEdge(x, y, w = 0)  // 向图中插入边(x, y)
// removeEdge(x, y)  // 在图中删除边(x, y)
// deleteVertex(x)  // // 从图中删除顶点x
// hasEdge(x, y)  // 判断是否存在边(x,y)或者<x, y>
// getAllEdge()  // 获取图中所有的边
// getEdgeWeight(x, y)  // 获取边(x, y)或<x, y>对应的权值
// getMaxEdgeWeight()  // 获得图中最大的权值
// getMinEdgeWeight() // 获得图中最小的权值
// setEdgeWeight(x, y, w)  // 设置边(x, y)或<x, y>的权值
// BFSTraverse(x)  // 广度优先遍历
// DFSTraverse(x)  // 深度优先遍历
// isConnected() // 判断当前的图是否是连通图
// getMSTree(method)  // 最小生成树
// getShortestPath(x)  // 求带权图顶点x到其他顶点的最短路径
// getTopoSort()  // 拓扑排序
// getCriticalPath()  // 关键路径

//顶点
export interface Vertex {
  data:number
  list:Vertex[]
}

//边
export interface Edge{
  //顶点1
  V1:Vertex
  //顶点2
  V2:Vertex
  //权重
  WeightType:number
}

export interface Graph {

}

// 无权图的单源最短路径 算法
export function Unweighted(v:any){
  const queue:number[] = []
  //路径表
  const path:number[] = []
  //距离表
  const dist:number[] = []

  console.log(path,dist)
  while(queue.length>0){
    const node =queue.pop()
    // for(node 的每个邻接点 w){
    //   if(dist[w] === -1){
    //     dist[w] = dist[v]+1
    //     path[w] = v
    //     queue.push(w)
    //   }
    // }
  }
}