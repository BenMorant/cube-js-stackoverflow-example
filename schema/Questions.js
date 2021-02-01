cube(`Questions`, {
  sql: `SELECT * FROM public.questions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, id]
    },
    
    viewCount: {
      sql: `view_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    title: {
      sql: `title`,
      type: `string`
    },
    
    tags: {
      sql: `tags`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
