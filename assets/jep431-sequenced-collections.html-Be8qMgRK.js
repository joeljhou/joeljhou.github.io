const e=JSON.parse('{"key":"v-7db7af70","path":"/java-features/Java21/jep431-sequenced-collections.html","title":"Java 21 新特性：有序集合","lang":"zh-CN","frontmatter":{"title":"Java 21 新特性：有序集合","description":"Java 21 新特性：有序集合（Sequenced Collections） 在JDK 21中，有序集合（Sequenced Collections）引入了新的接口和方法来简化集合处理。 此增强功能旨在解决访问Java中各种集合类型的第一个和最后一个元素需要非统一且麻烦处理场景 Sequenced Collections 引入如下 3 个新接口，用于...","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-01-07T00:00:00.000Z","category":"Java","tag":["Java","Java21"],"order":431,"head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/java-features/Java21/jep431-sequenced-collections.html"}],["meta",{"property":"og:site_name","content":"极客空间"}],["meta",{"property":"og:title","content":"Java 21 新特性：有序集合"}],["meta",{"property":"og:description","content":"Java 21 新特性：有序集合（Sequenced Collections） 在JDK 21中，有序集合（Sequenced Collections）引入了新的接口和方法来简化集合处理。 此增强功能旨在解决访问Java中各种集合类型的第一个和最后一个元素需要非统一且麻烦处理场景 Sequenced Collections 引入如下 3 个新接口，用于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cr.openjdk.org/~smarks/collections/SequencedCollectionDiagram20220216.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-27T03:54:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java 21 新特性：有序集合"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Java21"}],["meta",{"property":"article:published_time","content":"2024-01-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-27T03:54:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 21 新特性：有序集合\\",\\"image\\":[\\"https://cr.openjdk.org/~smarks/collections/SequencedCollectionDiagram20220216.png\\"],\\"datePublished\\":\\"2024-01-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-27T03:54:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"SequencedCollection","slug":"sequencedcollection","link":"#sequencedcollection","children":[]},{"level":2,"title":"SequencedSet","slug":"sequencedset","link":"#sequencedset","children":[]},{"level":2,"title":"SequencedMap","slug":"sequencedmap","link":"#sequencedmap","children":[]},{"level":2,"title":"改造","slug":"改造","link":"#改造","children":[]},{"level":2,"title":"第一个和最后一个元素的访问","slug":"第一个和最后一个元素的访问","link":"#第一个和最后一个元素的访问","children":[]}],"git":{"createdTime":1709006063000,"updatedTime":1709006063000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":1}]},"readingTime":{"minutes":4.55,"words":1366},"filePathRelative":"java-features/Java21/jep431-sequenced-collections.md","localizedDate":"2024年1月7日","excerpt":"\\n<p>在JDK 21中，<strong>有序集合</strong>（Sequenced Collections）引入了新的接口和方法来简化集合处理。</p>\\n<blockquote>\\n<p>此增强功能旨在解决访问Java中各种集合类型的第一个和最后一个元素需要非统一且麻烦处理场景</p>\\n</blockquote>\\n<p><code>Sequenced Collections</code> 引入如下 3 个新接口，用于处理顺序<code>List</code>、<code>Set</code>和<code>Map</code>，\\n并将它们整合到现有的集合类型中。这些新接口中的方法都具有默认实现。</p>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{e as data};