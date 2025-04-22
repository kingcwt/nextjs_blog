#!/bin/bash

if [ -z "$1" ]; then
    echo "错误：请提供提交信息作为参数"
    exit 1
fi

# 提交代码 接受一个参数 作为提交信息
git add . || { echo "添加文件失败"; exit 1; }
git commit -m "$1" || { echo "提交失败"; exit 1; }
git push origin