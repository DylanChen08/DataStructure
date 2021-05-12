//tree.js
// 创建一棵树

const createTree = (value) => {
    return {
        data: value,
        child: null,
        parent: null
    };
};

const addchild = (node, value) => {
    const newNode = {
        data: value,
        children: null,
        parent: node //默认父节点记为自己
    };
    //判断节点是否空的
    console.log(1);
    node.children = node.children || [];
    node.children.push(newNode);
    return newNode; //需要返回新节点，才能够在此基础上继续增加
};

const find = (tree, node) => {
    console.log('--Find is working--')
    if (tree === node) {
        //找到父节点(本身)就返回
        return tree;
    } else if (tree.children) {

        for (let i = 0; i < tree.children.length; i++) {
            const result = find(tree.children[i], node);

            if (result) {
                return result;
            }
        }
        return undefined;//不是子节点的结果，返回undefinded
    } else {
        return undefined;//既不是父节点(本身)，也不是子节点，返回undefinded
    }

};

//删除子节点
const removeNodes = (tree, node) => {
    //先找到父节点，再看看父节点的子节点排行第几
    const siblings = node.parent.children;
    let index = 0;
    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === node) {
            index = i
        }
    }
    //上面已知父节点的子节点排第几，故可以定位删除
    siblings.splice(index, 1)
}

//遍历树的子节点
const travel = (tree, fn) => {
    //递归
    fn(tree);
    if (tree.children) {
        console.log('--Travel is working--')
        for (let i = 0; i < tree.children.length; i++) {
            travel(tree.children[i], fn);
        }
    } else {
        return;
    }
};
const tree = createTree(10);
const node2 = addchild(tree, 20);
addchild(node2, 201);
addchild(node2, 202);
addchild(node2, 203);
addchild(tree, 30);
addchild(tree, 40);
addchild(tree, 50);
const node6 = addchild(tree, 60);
// console.log(tree);

const fn = (node) => {
    console.log("-- 打印子节点 --");
    console.log(node.data);
};
// travel(tree, fn);


//寻找子节点
// const findRes = find(tree,node2)
// console.log(findRes)

removeNodes(tree, node6)
console.log(tree)