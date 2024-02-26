const a=JSON.parse('{"key":"v-59b2268e","path":"/java-features/Java21/jep430-string-templates.html","title":"Java 21 新特性：字符串模版(Preview)","lang":"zh-CN","frontmatter":{"title":"Java 21 新特性：字符串模版(Preview)","description":"Java 21 新特性：String Templates（字符串模版） Java 21 中引入了字符串模版（String Templates），它是一种新的字符串字面量，用于更简洁地构建字符串。 字符串组合的机制 在之前，Java 提供了几种字符串组合的机制，但不幸的是，它们都存在一些缺点 使用 + 操作符, 代码难以阅读 使用 StringBuild...","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-01-06T00:00:00.000Z","category":"Java","tag":["Java","Java21"],"order":430,"head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/java-features/Java21/jep430-string-templates.html"}],["meta",{"property":"og:site_name","content":"极客空间"}],["meta",{"property":"og:title","content":"Java 21 新特性：字符串模版(Preview)"}],["meta",{"property":"og:description","content":"Java 21 新特性：String Templates（字符串模版） Java 21 中引入了字符串模版（String Templates），它是一种新的字符串字面量，用于更简洁地构建字符串。 字符串组合的机制 在之前，Java 提供了几种字符串组合的机制，但不幸的是，它们都存在一些缺点 使用 + 操作符, 代码难以阅读 使用 StringBuild..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T08:51:18.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Java21"}],["meta",{"property":"article:published_time","content":"2024-01-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-26T08:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 21 新特性：字符串模版(Preview)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-26T08:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"字符串组合的机制","slug":"字符串组合的机制","link":"#字符串组合的机制","children":[]},{"level":2,"title":"模版表达式（插值）","slug":"模版表达式-插值","link":"#模版表达式-插值","children":[]},{"level":2,"title":"STR模版处理器","slug":"str模版处理器","link":"#str模版处理器","children":[]},{"level":2,"title":"多行模板表达式","slug":"多行模板表达式","link":"#多行模板表达式","children":[]},{"level":2,"title":"FMT模板处理器","slug":"fmt模板处理器","link":"#fmt模板处理器","children":[]}],"git":{"createdTime":1708937478000,"updatedTime":1708937478000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":1}]},"readingTime":{"minutes":5.19,"words":1556},"filePathRelative":"java-features/Java21/jep430-string-templates.md","localizedDate":"2024年1月6日","excerpt":"\\n<p>Java 21 中引入了<strong>字符串模版</strong>（String Templates），它是一种新的字符串字面量，用于更简洁地构建字符串。</p>\\n<h2>字符串组合的机制</h2>\\n<p>在之前，Java 提供了几种字符串组合的机制，但不幸的是，它们都存在一些缺点</p>\\n<ol>\\n<li>使用 <code>+</code> 操作符, 代码难以阅读<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> x <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\" plus \\"</span> <span class=\\"token operator\\">+</span> y <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\" equals \\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">(</span>x <span class=\\"token operator\\">+</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div></li>\\n<li>使用 <code>StringBuilder</code> 和 <code>StringBuffer</code>，代码冗长<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">StringBuilder</span>（）\\n                <span class=\\"token punctuation\\">.</span>append（x）\\n                <span class=\\"token punctuation\\">.</span>append（“plus“）\\n                <span class=\\"token punctuation\\">.</span>append（y）\\n                <span class=\\"token punctuation\\">.</span>append（“equals“）\\n                <span class=\\"token punctuation\\">.</span>append（x <span class=\\"token operator\\">+</span> y）\\n                <span class=\\"token punctuation\\">.</span>println（）<span class=\\"token punctuation\\">;</span>\\n</code></pre></div></li>\\n<li>使用 <code>String::format</code> 和 <code>String::formatted</code>，容易出现参数数量和类型不匹配的问题<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%2$d plus %1$d equals %3$d\\"</span><span class=\\"token punctuation\\">,</span> x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> x <span class=\\"token operator\\">+</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">String</span> t <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"%2$d plus %1$d equals %3$d\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">formatted</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> x <span class=\\"token operator\\">+</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div></li>\\n<li>使用 <code>java.text.MessageFormat</code> 格式化消息，语法复杂对一些人来说可能不太熟悉<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">MessageFormat</span> mf <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">MessageFormat</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"{0} plus {1} equals {2}\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> mf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> x <span class=\\"token operator\\">+</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div></li>\\n</ol>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{a as data};
