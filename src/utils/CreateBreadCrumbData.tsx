export function UpdateBreadCrumbData(blockNumber,params){
    let breadCrumbData = JSON.parse(
        localStorage.getItem("breadCrumbData") as string
      );
      breadCrumbData.push({
        label: `Block ${blockNumber}`,
        link: `/blockSelection/${params.id}`,
      });
      localStorage.setItem("breadCrumbData",JSON.stringify([...new Set(breadCrumbData)]));
}