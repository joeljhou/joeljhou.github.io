import{_ as a,o as n,c as s,f as e}from"./app-Uw_l8TtI.js";const t={},o=e(`<h1 id="java-18-新特性-指定utf-8为默认字符集" tabindex="-1"><a class="header-anchor" href="#java-18-新特性-指定utf-8为默认字符集" aria-hidden="true">#</a> Java 18 新特性：指定UTF-8为默认字符集</h1><p>在Java 18中，将<code>UTF-8</code>指定为标准Java API 的默认字符集， 以提高Java程序在不同实现、操作系统、区域设置和配置下的一致性。</p><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><ul><li>使Java程序在依赖默认字符集的代码上更加可预测和<strong>可移植</strong></li><li>明确标准Java API在何处使用默认字符集</li><li>在标准Java API中统一使用UTF-8，除了控制台I/O</li></ul><p>尽管这项工作可能会发现新的便利方法可能会使现有的API更易于使用，但这一更改并不是要弃用或删除依赖默认字符集的标准Java API。</p><h2 id="动机" tabindex="-1"><a class="header-anchor" href="#动机" aria-hidden="true">#</a> 动机</h2><p>默认情况下，Java API 会根据<strong>运行时环境</strong>（操作系统、用户的区域设置等）选择默认字符集。 为了提高 Java API 的一致性并降低潜在的兼容性问题，我们建议将所有 Java API 统一使用 <code>UTF-8</code> 作为默认字符集。 尽管这一变更可能对迁移到 JDK 18 的程序产生兼容性影响，但我们提供了一个 <code>COMPAT</code> 选项，允许恢复到之前的行为，即默认字符集取决于环境。</p><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><h3 id="兼容性危害示例" tabindex="-1"><a class="header-anchor" href="#兼容性危害示例" aria-hidden="true">#</a> 兼容性危害示例</h3><p>在MacOS上以<code>UTF-8</code>编码的日语文本文件在Windows上以美英或日语区域设置读取时被损坏</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>FileReader</span><span class="token punctuation">(</span>“hello<span class="token punctuation">.</span>txt”<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> “こんにちは” <span class="token punctuation">(</span>macOS<span class="token punctuation">)</span>
<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>FileReader</span><span class="token punctuation">(</span>“hello<span class="token punctuation">.</span>txt”<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> “ã<span class="token operator">?</span>“ã‚“ã<span class="token operator">?</span>«ã<span class="token operator">?</span>¡ã<span class="token operator">?</span> ” <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token punctuation">(</span>en<span class="token operator">-</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>FileReader</span><span class="token punctuation">(</span>“hello<span class="token punctuation">.</span>txt”<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> “縺ォ縺。縺ッ” <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token punctuation">(</span>ja<span class="token operator">-</span><span class="token constant">JP</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询默认字符集" tabindex="-1"><a class="header-anchor" href="#查询默认字符集" aria-hidden="true">#</a> 查询默认字符集</h3><p>通过方法 <code>java.nio.charset.Charset.defaultCharset()</code> 可以获取默认字符集。</p><p>另外，使用以下命令可以快速查看当前 JDK 的默认字符集：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>java <span class="token operator">-</span><span class="token class-name">XshowSettings</span><span class="token operator">:</span>properties <span class="token operator">-</span>version <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">|</span> grep file<span class="token punctuation">.</span>encoding
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想在所有 Java 版本上获取从环境中确定的字符集，可以使用以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取native.encoding系统属性（在Java 18及更高版本上赋值）</span>
<span class="token class-name">String</span> encoding <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;native.encoding&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用三元运算符选择字符集，如果encoding不为null，则使用指定字符集，否则使用默认字符集</span>
<span class="token class-name">Charset</span> cs <span class="token operator">=</span> <span class="token punctuation">(</span>encoding <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>encoding<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">defaultCharset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用指定字符集创建 FileReader 对象，打开名为 &quot;file.txt&quot; 的文件</span>
<span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">,</span> cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兼容使用默认字符集api-迁移" tabindex="-1"><a class="header-anchor" href="#兼容使用默认字符集api-迁移" aria-hidden="true">#</a> 兼容使用默认字符集API（迁移）</h3><p>多个标准 Java API 使用默认字符集，包括：</p><ul><li>在 java.io 包中，InputStreamReader、FileReader、OutputStreamWriter、FileWriter 和 PrintStream 提供了构造函数，用于创建使用默认字符集进行编码或解码的读取器、写入器和打印流</li><li>在 java.util 包中，Formatter 和 Scanner 提供了构造函数，使用默认字符集进行操作</li><li>在 java.net 包中，URLEncoder 和 URLDecoder 提供了使用默认字符集的已弃用方法</li></ul><p>我们将更新所有使用 Charset.defaultCharset() 进行交叉引用的标准 Java API 的规范。 这些 API 包括上述提到的 API，但不包括 System.out 和 System.err，它们的字符集将由 Console.charset() 指定。</p><h3 id="file-encoding-和-native-encoding-系统属性" tabindex="-1"><a class="header-anchor" href="#file-encoding-和-native-encoding-系统属性" aria-hidden="true">#</a> file.encoding 和 native.encoding 系统属性</h3><p><code>file.encoding</code> 是 Java 虚拟机的系统属性，用于指定默认的字符编码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Dfile.encoding</span><span class="token operator">=</span>COMPAT   <span class="token comment"># COMPAT 模式, 默认字符集取决于环境</span>
<span class="token function">java</span> <span class="token parameter variable">-Dfile.encoding</span><span class="token operator">=</span>UTF-8    <span class="token comment"># UTF-8 模式, 默认字符集为UTF-8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>native.encoding</code> 在Java 17 中引入，该属性提供了底层主机环境的字符编码名称</p><p>Java内部使用了三个字符集相关的系统属性，它们目前未指定且不受支持。这里简要记录一下：</p><ol><li><code>sun.stdout.encoding</code></li><li><code>sun.stderr.encoding</code></li><li><code>sun.jnu.encoding</code>：</li></ol><blockquote><p>Tips：对于JDK(8-17)：强烈建议开发人员使用<code>java -Dfile.encoding=UTF-8</code>指定默认字符集为UTF-8启动程序</p></blockquote><h3 id="源文件编码" tabindex="-1"><a class="header-anchor" href="#源文件编码" aria-hidden="true">#</a> 源文件编码</h3><p>Java语言允许源代码使用<code>UTF-16</code>编码方式表达<code>Unicode</code>字符，并且这不受默认字符集UTF-8的影响。 但是，<code>javac</code>编译器会受到影响，因为它需要将源代码转换为平台默认的字符集，除非通过<code>-encoding</code>选项进行配置</p><p>如果源文件以非UTF-8编码保存并在较早的JDK上进行编译，然后在JDK 18或更高版本上重新编译，可能会导致问题。 例如，如果非UTF-8源文件中的字符串文字包含非ASCII字符，则在JDK 18或更高版本中，除非使用<code>-encoding</code>选项，否则这些文字可能会被<code>javac</code>错误解释。</p><p>在使用UTF-8作为默认字符集的JDK上编译之前，强烈建议开发人员通过在当前JDK（8-17）上使用javac -encoding UTF-8 ... 进行编译来检查字符集问题。 另外，喜欢以非UTF-8编码保存源文件的开发人员可以通过将JDK 17及更高版本上的<code>-encoding</code>选项设置为<code>native.encoding</code>系统属性的值，防止javac假定UTF-8。</p><h3 id="旧版默认字符集-us-ascii" tabindex="-1"><a class="header-anchor" href="#旧版默认字符集-us-ascii" aria-hidden="true">#</a> 旧版默认字符集（US-ASCII）</h3><p>在JDK 17及更早版本中，名称<code>default</code>会被识别为<code>US-ASCII</code>字符集的别名。</p><p>在JDK 18中，默认字符集<code>UTF-8</code>，保留<code>default</code>作为<code>US-ASCII</code>的别名将会非常混乱，于是重新定义<code>default</code>不再是<code>US-ASCII</code>的别名。</p><p>Java程序使用枚举常量StandardCharsets.US_ASCII来明确其开发人员意图，而不是向Charset.forName(...)传递字符串。</p><p>因此，在JDK 18中，<code>Charset.forName(&quot;default&quot;)</code>将抛出 UnsupportedCharsetException。 这将为开发人员提供检测到这种惯用法并迁移到US-ASCII或Charset.defaultCharset()结果的机会。</p>`,37),p=[o];function c(i,l){return n(),s("div",null,p)}const r=a(t,[["render",c],["__file","jep400-utf8-by-default.html.vue"]]);export{r as default};
