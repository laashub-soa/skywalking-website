(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{196:function(e,t,a){e.exports=a.p+"assets/img/apache-skywalking.dde04a6b.jpg"},197:function(e,t,a){e.exports=a.p+"assets/img/endpoint-dep.64dc7e29.png"},198:function(e,t,a){e.exports=a.p+"assets/img/spring.a5e3ee47.png"},317:function(e,t,a){"use strict";a.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(196),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(197),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(198),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("With the logic endpoint supported, the local span can be analyzed to get metrics. One span could carry the raw data of more than one endpoint’s performance.")]),e._v(" "),a("li",[e._v("GraphQL, InfluxDB Java Client, and Quasar fiber libs are supported to be observed automatically.")]),e._v(" "),a("li",[e._v("Kubernetes Configmap can now for the first time be used as the dynamic configuration center– a more cloud-native solution for k8s deployment environments.")]),e._v(" "),a("li",[e._v("OAP supports health checks, especially including the storage health status. If the storage (e.g., ElasticSearch) is not available, you could get the unhealth status with explicit reasons through the health status query.")]),e._v(" "),a("li",[e._v("Opencensus receiver supports ingesting OpenTelemetry/OpenCensus agent metrics by meter-system.")])])}],r=a(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"features-in-skywalking-8-1-springsleuth-metrics-endpoint-dependency-detection-kafka-transport-traces-and-metrics"}},[e._v("Features in SkyWalking 8.1: SpringSleuth metrics, endpoint dependency detection, Kafka transport traces and metrics")]),e._v(" "),a("ul",[a("li",[e._v("Author: Sheng Wu, Hongtao Gao, and Tevah Platt. tetrate.io")]),e._v(" "),a("li",[e._v("Original link, "),a("a",{attrs:{href:"https://www.tetrate.io/blog/skywalking8-1-release/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tetrate.io blog"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Aug. 3rd, 2020")])]),e._v(" "),e._m(0),e._v(" "),a("p",[e._v("Apache SkyWalking, the observability platform, and open-source application performance monitor (APM) project, today announced the general availability of its 8.1 release that extends its functionalities and provides a transport layer to maintain the lightweight of the platform that observes data continuously.")]),e._v(" "),a("h2",{attrs:{id:"background"}},[e._v("Background")]),e._v(" "),a("p",[e._v("SkyWalking is an observability platform and APM tool that works with or without a service mesh, providing automatic instrumentation for microservices, cloud-native and container-based applications. The top-level Apache project is supported by a global community and is used by Alibaba, Huawei, Tencent, Baidu, and scores of others.")]),e._v(" "),a("h2",{attrs:{id:"transport-traces"}},[e._v("Transport traces")]),e._v(" "),a("p",[e._v("For a long time, SkyWalking has used gRPC and HTTP to transport traces, metrics, and logs. They provide good performance and are quite lightweight, but people kept asking about the MQ as a transport layer because they want to keep the observability data continuously as much as possible. From SkyWalking’s perspective, the MQ based transport layer consumes more resources required in the deployment and the complexity of deployment and maintenance but brings more powerful throughput capacity between the agent and backend.")]),e._v(" "),a("p",[e._v("In 8.1.0, SkyWalking officially provides the typical MQ implementation, Kafka, to transport all observability data, including traces, metrics, logs, and profiling data. At the same time, the backend can support traditional gRPC and HTTP receivers, with the new Kafka consumer at the same time. Different users could choose the transport layer(s) according to their own requirements. Also, by referring to this "),a("a",{attrs:{href:"https://github.com/apache/skywalking/pull/4847",target:"_blank",rel:"noopener noreferrer"}},[e._v("implementation"),a("OutboundLink")],1),e._v(", the community could contribute various transport plugins for Apache Pulsar, RabbitMQ.")]),e._v(" "),a("h2",{attrs:{id:"automatic-endpoint-dependencies-detection"}},[e._v("Automatic endpoint dependencies detection")]),e._v(" "),a("p",[e._v("The 8.1 SkyWalking release offers automatic detection of endpoint dependencies. SkyWalking has long offered automatic endpoint detection, but endpoint dependencies, including upstream and downstream endpoints, are critical for Ops and SRE teams’ performance analysis. The APM system is expected to detect the relationships powered by the distributed tracing. While SkyWalking has been designed to include this important information at the beginning the latest 8.1 release offers a cool visualization about the dependency and metrics between dependent endpoints. It provides a new drill-down angle from the topology. Once you have the performance issue from the service level, you could check on instance and endpoint perspectives:")]),e._v(" "),e._m(1),e._v(" "),a("h2",{attrs:{id:"springsleuth-metrics-detection"}},[e._v("SpringSleuth metrics detection")]),e._v(" "),a("p",[e._v("In the Java field, the Spring ecosystem is one of the most widely used. "),a("a",{attrs:{href:"https://micrometer.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Micrometer"),a("OutboundLink")],1),e._v(", the metrics API lib included in the Spring Boot 2.0, is now adopted by SkyWalking’s native meter system APIs and agent. For applications using Micrometer with the SkyWalking agent installed, all Micrometer collected metrics could then be shipped into SkyWalking OAP. With "),a("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/spring-sleuth-setup.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("some configurations in the OAP and UI"),a("OutboundLink")],1),e._v(", all metrics are analyzed and visualized in the SkyWalking UI, with all other metrics detected by SkyWalking agents automatically.")]),e._v(" "),e._m(2),e._v(" "),a("h2",{attrs:{id:"notable-enhancements"}},[e._v("Notable enhancements")]),e._v(" "),a("p",[e._v("The Java agent core is enhanced in this release. It could work better in the concurrency class loader case and is more compatible with another agent solution, such as Alibaba’s Arthas.")]),e._v(" "),e._m(3),e._v(" "),a("h2",{attrs:{id:"additional-resources"}},[e._v("Additional resources")]),e._v(" "),a("ul",[a("li",[e._v("Read more about the "),a("a",{attrs:{href:"https://github.com/apache/skywalking/blob/v8.1.0/CHANGES.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SkyWalking 8.1 release highlights"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Read more about SkyWalking from Tetrate on our "),a("a",{attrs:{href:"https://www.tetrate.io/blog/category/open-source/apache-skywalking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Get more SkyWalking updates on "),a("a",{attrs:{href:"https://twitter.com/ASFSkyWalking",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Sign up to hear more about SkyWalking and observability from "),a("a",{attrs:{href:"https://www.tetrate.io/contact-us/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tetrate"),a("OutboundLink")],1),e._v(".")])])])},n,!1,null,null,null);t.default=i.exports}}]);