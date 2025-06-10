interface QueryResponse { 
  success: boolean,
  message: string,
  data?: IEditoriales | IEditoriales[] | null,
  error?: string
}