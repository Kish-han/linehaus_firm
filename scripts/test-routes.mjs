import http from "node:http";

const routes = [
  { path: "/", expectedType: "text/html" },
  { path: "/studio", expectedType: "text/html" },
  { path: "/projects", expectedType: "text/html" },
  { path: "/projects/courtyard-residence-bhadravati", expectedType: "text/html" },
  { path: "/projects/the-verandah-estate-shivamogga", expectedType: "text/html" },
  { path: "/projects/axis-corporate-headquarters", expectedType: "text/html" },
  { path: "/projects/slate-penthouse-interiors", expectedType: "text/html" },
  { path: "/projects/laterite-ridge-residence", expectedType: "text/html" },
  { path: "/projects/the-monsoon-garden-pavilion", expectedType: "text/html" },
  { path: "/services", expectedType: "text/html" },
  { path: "/contact", expectedType: "text/html" },
  { path: "/robots.txt", expectedType: "text/plain" },
  { path: "/sitemap.xml", expectedType: "application/xml" },
  { path: "/non-existent-route-for-404-test", expectedStatus: 404, expectedType: "text/html" },
];

function testRoute(route) {
  return new Promise((resolve) => {
    const req = http.get(
      `http://localhost:3000${route.path}`,
      { headers: { "User-Agent": "Linehaus-QA-Tester/1.0" } },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          const expectedStatus = route.expectedStatus || 200;
          const statusOk = res.statusCode === expectedStatus;
          const contentType = res.headers["content-type"] || "";
          const typeOk = contentType.includes(route.expectedType);
          const hasTitle = route.expectedType === "text/html" ? body.includes("<title>") : true;

          resolve({
            path: route.path,
            status: res.statusCode,
            expectedStatus,
            statusOk,
            contentType,
            typeOk,
            hasTitle,
            bytes: Buffer.byteLength(body, "utf8"),
            passed: statusOk && typeOk && hasTitle,
          });
        });
      }
    );

    req.on("error", (err) => {
      resolve({
        path: route.path,
        error: err.message,
        passed: false,
      });
    });
  });
}

async function run() {
  console.log("===============================================================");
  console.log("LINEHAUS ARCHITECTS — AUTOMATED ROUTE INTEGRITY & QA AUDIT");
  console.log("===============================================================");
  console.log(`Testing ${routes.length} endpoints on http://localhost:3000\n`);

  let allPassed = true;
  const results = [];

  for (const route of routes) {
    const res = await testRoute(route);
    results.push(res);
    if (!res.passed) allPassed = false;
  }

  console.table(
    results.map((r) => ({
      Route: r.path,
      Status: `${r.status} (exp: ${r.expectedStatus})`,
      "Content-Type": (r.contentType || "").split(";")[0],
      Bytes: r.bytes || 0,
      Pass: r.passed ? "PASS" : "FAIL",
    }))
  );

  if (allPassed) {
    console.log("\nALL ROUTES PASSED VERIFICATION.");
    process.exit(0);
  } else {
    console.error("\nONE OR MORE ROUTES FAILED.");
    process.exit(1);
  }
}

run();
