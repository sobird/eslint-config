/**
 * Typescirpt ESLint
 * 
 * @see https://typescript-eslint.io/play
 */

import { type Linter } from 'eslint';

const config: Linter.BaseConfig = {
  plugins: ['@typescript-eslint'],

  settings: {
    "import/resolver": {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json']
      }
    },
    'import/extensions': ['.js', '.mjs', '.ts', '.json'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    sourceType: 'module'
  },

  rules: {
    //
    // 覆盖掉 ESLint 的规则

    // 禁止使用未定义的变量
    // @off 接口定义会报错
    'no-undef': 'off',

    // 与ts的函数重载功能冲突
    'no-dupe-class-members': 'off',

    // ts 本身可识别真正的 export 同名错误并编译异常
    'import/export': 'off',

    // 在ts中大部分需要同时导出值和类型，多导出是常态
    'prefer-default-export': 'off',

    // TS 中对支持在引入 ts 时忽略后缀名
    // @error, 增加格外配置
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        mjs: 'never',
        json: 'never',
      }
    ],
    
    // TS 本身会预编译时检查依赖 
    'import/no-unresolved': 'off',

    // 在 TS 中多导出是正常的
    'import/prefer-default-export': 'off',
    
    // TS 中，该规则会对 interface 中 property 的定义进行检查，和规则本身的初衷并不一致，所以缩减限制范围
    'no-restricted-globals': [
      'error',
      'isFinite',
      'isNaN',
      'addEventListener',
      'blur',
      'event',
      'external',
      'focus',
      'history',
      'length',
      'location',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'removeEventListener',
      'self'
    ],

    //
    // eslint-plugin-typescript 的规则
    
    // 重载必须是连贯的
    // @warn 考虑到可读性 和 遵守成本不高，开启该规则； 但部分重写第三方库函数时，没办法重载函数放在一起
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    
    // 数组类型定义语法约束为 T[] 或 Array<T>
    // @off 两种并没有绝对性的优劣，暂时保持关闭
    '@typescript-eslint/array-type': 'off',
    
    // @off 禁止使用的类型交由开发者自行控制
    '@typescript-eslint/ban-types': 'off',

    // @off 禁止对没有 then 方法的对象使用 await
    '@typescript-eslint/await-thenable': 'off',

    // @off 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
    '@typescript-eslint/ban-ts-comment': 'off',

    // @error 替代基础的 camelcase 规则
    // 新版插件该指标已经删除
    // "camelcase": "off",
    // "@typescript-eslint/camelcase": ["error", { "properties": "always" }],

    // 规则已废弃，使用 naming-convention 代替
    // "@typescript-eslint/class-name-casing": "error",

    // @off, 各类型或变量的命名方式，不作过多限制
    '@typescript-eslint/naming-convention': 'off',
    
    // @off, 禁止 delete 时传入的 key 是动态的
    '@typescript-eslint/no-dynamic-delete': 'off',

    // 必须指定函数的返回类型
    // @off ts函数支持自动推导出函数返回类型，无需手写。只要项目tscofnig开启 禁止隐式any 即可达到此规则的设计初衷，且判断更精准
    '@typescript-eslint/explicit-function-return-type': 'off',

    // 必须手动指定类的属性和方法的可访问性（private 或 public）
    // @off 过于严格
    '@typescript-eslint/explicit-member-accessibility': 'off',
    
    // 约束类型定义的字段命名格式
    // @off 未曾达成一致，且过于严格
    // @2beDiscussed
    '@typescript-eslint/generic-type-naming': 'off',

    // 接口必须以 I 开头
    // @off 没必要限制
    '@typescript-eslint/interface-name-prefix': 'off',
    
    // @error 替代基础的 indent 规则
    // 'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    // '@typescript-eslint/indent': ['error', 2],

    // 接口和类型字面量中每一行都必须以分号结尾
    // 已被删除
    // "@typescript-eslint/member-delimiter-style": "error",

    // 私有变量命名必须以下划线开头
    // @off 没必要限制
    '@typescript-eslint/member-naming': 'off',

    // 属性和方法必须按照排序规则排序
    // @error 开启，帮助代码的可阅读性 及 良好的编码习惯
    '@typescript-eslint/member-ordering': 'error',
    
    // @deprecated 规则已废弃，用 consistent-type-assertions 替代
    // "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    // 使用 as 或 尖括号 断言方式都ok，不作限制
    '@typescript-eslint/consistent-type-assertions': 'off',
    
    // 禁止使用 Array 构造函数来初始化数组，除非指定了泛型，或传入的是单个数字
    // @error 开启，可以帮助发现错误
    '@typescript-eslint/no-array-constructor': 'error',
    
    // 禁止使用空接口
    // @off 没必要限制
    '@typescript-eslint/no-empty-interface': 'off',
    
    // 禁止使用 any
    // @off 过于严格
    '@typescript-eslint/no-explicit-any': 'off',
    
    // 禁止将 class 仅当作 namespace 使用
    // @error 使用合理的语法实现对应的功能
    '@typescript-eslint/no-extraneous-class': 'error',

    // 禁止对直接赋值为 数字、字符串、布尔值 的 参数或属性 定义类型
    // @off 没有必要限制，类型全明示其实虽然有些冗余，但可读性会好一些
    '@typescript-eslint/no-inferrable-types': 'off',

    // 禁止不合理的使用 new
    // @error 有利于发现错误
    '@typescript-eslint/no-misused-new': 'error',

    // 禁止使用 namespace 和 modules
    // @off using the ES2015 module syntax, do not need this rule.
    '@typescript-eslint/no-namespace': 'off',
    
    // @off 一致性地使用 interface 或 type，不作限制
    '@typescript-eslint/consistent-type-definitions': 'off',

    // @off 有默认值或可选的参数必须放到最后，不作限制
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',

    // 禁止使用 non-null 断言
    // @off 虽然违背了开启严格的 null-checking 的初衷，但是部分情况下确实会需要这样处理
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
    // @error, optional chaining 后面的属性一定是非空的
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // 使用 optional chaining 替代 &&
    '@typescript-eslint/prefer-optional-chain': 'off',

    // 禁止出现没必要的 constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',

    // @deprecated 规则已废弃，用 consistent-type-assertions 替代
    // "@typescript-eslint/no-object-literal-type-assertion": "off",

    // 禁止变量名与上层作用域内的已定义的变量重复
    // @off 很多时候函数的形参和传参是同名的
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',

    // @off，禁止调用 Promise 时不处理异常情况
    '@typescript-eslint/no-floating-promises': 'off',

    // 禁止在给构造函数的参数添加修饰符
    // @off 没必要限制
    '@typescript-eslint/no-parameter-properties': 'off',
    
    // 禁止将 this 赋值给其他变量
    // @off 使用 箭头函数 或 bind 方法实现上下文的绑定
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
      }
    ],

    // interface 和 type 定义时必须声明类型
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],

    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    // @off 必要性不大
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off',

    // 禁止重复导入模块
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    // 禁止在类之外的地方使用 this
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    // 禁止使用超出 js 精度范围的数字
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    // @error, 禁止在函数返回类型之外使用 void 类型
    '@typescript-eslint/no-invalid-void-type': 'error',

    // 禁止使用三斜线注释
    // @off 没必要限制
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    
    // 限制 type 的使用
    // @off 没必要限制
    '@typescript-eslint/no-type-alias': 'off',
    
    // @error 非必要的断言会造成代码可读性的下降，带来迷惑性
    // 解析出错
    // "@typescript-eslint/no-unnecessary-type-assertion": "error",

    // 定义过的变量必须使用
    // @error eslint 原生的 no-unused-vars 无法使用，需要使用 typescript/no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'args': 'after-used',
        'ignoreRestSiblings': true
      }
    ],
    
    // 使用typescript-base支持的 no-use-before-define
    'no-use-before-define': 'off',
    // 变量必须先定义后使用
    '@typescript-eslint/no-use-before-define': 'error',
    
    // @off 现在仍然存在这种模块引用语法习惯，尤其是 node 场景下，没必要过于限制
    '@typescript-eslint/no-var-requires': 'off',

    // 倾向使用 interface 代替 type
    // @off 和 @typescript-eslint/no-type-alias 的作用类似，目前看没必要限制
    '@typescript-eslint/prefer-interface': 'off',

    // 使用 namespace 代替 module
    // @off typescirpt/no-namespace 已经禁用了 namespace 和 module
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // 要求 + 运算符的运算元素必须同为 number 或 同为 string 类型
    // @error string 拼装目前要求使用字符串模板，因此 + 运算两侧同时要求是 number 类型是合理的，可以避免出错
    '@typescript-eslint/restrict-plus-operands': 'error',
    
    // 类型定义的冒号前后是否需要空格
    // 默认冒号前必须没有空格，冒号后必须有空格
    '@typescript-eslint/type-annotation-spacing': 'error',
  }
};

export default config;
