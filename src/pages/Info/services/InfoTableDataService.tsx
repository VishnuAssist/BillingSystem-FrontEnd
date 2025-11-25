


export const InfoTableDataService = (InfoList:any) => {
    const HistoryColumns = [
    { id: "infoTitle", label: "Info Titles" },
    { id: "infoDescription", label: "Info Description" },
    { id: "infoInformer", label: "Info Informer" },
   
  ];
  
    const rows = InfoList
    ? InfoList.map((InfoList: any) => {
        return {
          infoTitle: InfoList.infoTitle,
          infoDescription: InfoList.infoDescription,
          infoInformer: InfoList.infoInformer,
         
        };
      })
    : [];
 return { columns: HistoryColumns, rows };
};

export default InfoTableDataService;
