MODELO FRONTEND REACT TEST
==========================


To begin development environment:
1. Clone repo && cd into directory
2. `yarn`
3. `yarn start`
4. In another terminal window: `yarn test`
5. Navigate to http://127.0.0.1:3000

Bootstrapped quickly with create-react-app, in case you need to change any webpack configs.

### Task:

*Note: Try to keep under 1 hour on this task, global over local refactoring optimizations.*


This react app is a simple calculator.  Currently, it's functional (for the most part),
but obviously a bit rough around the edges.  Please refactor code to meet best practices, focusing
on code readability, reusability, and consistency.  Think whether any actions have
strange UX behavior.

Feel free to write in todos for tasks that would improve UX or reusability,
but would be outside the scope of this task time-wise.

Also, feel welcome to add in other libraries if they are part of your normal workflow.  Ideally,
link to the documentation for these libraries and leave a brief comment on why you added them in.

Testing may be helpful.

changes:
1. 格式化代码，文件的缩紧改为两个空格
2. 几乎重写了整个 Calculator 组件，因为原来的 Component 几乎不可用，在原代码的基础上重构，依然有很多 bug
3. 增加了监听键盘 keydown 事件，支持数字键和其它几个运算符
4. 增加了 package.json 里增加了 `babel-plugin-transform-function-bind` 这个 plugin，可以方便的 bind function
5. 删掉了没用的 className
