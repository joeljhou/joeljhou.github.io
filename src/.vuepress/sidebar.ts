import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [],
    /*Java新特性*/
    "/java-features/": [
        {text: "总目录", prefix: "/java-features/", link: "/java-features/",},
        {
            text: "Java 11", prefix: "Java11/", link: "Java11/",
            children: [
                {text: "移除JavaEE和CORBA模块", link: "jep320-remove-JavaEE-CORBA"},
            ],
        },
        {
            text: "Java 10", prefix: "Java10/", link: "Java10/",
            children: [
                {text: "局部变量的类型推断", link: "jep286-local-variable-type-inference"},
            ],
        },
        {
            text: "Java 9", prefix: "Java9/", link: "Java9/",
            children: [
                {text: "交互式编程环境JShell", link: "jep222-jshell"},
                {text: "不可变集合的快捷创建方法", link: "jep269-convenience-factory-methods-for-collections"},
            ],
        }
    ],
});
