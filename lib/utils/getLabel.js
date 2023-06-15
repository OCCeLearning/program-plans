export const getLabel = (item) => {
  switch (item) {
    case 'pe':
        return 'Program Elective'
  
    case 'elective':
        return 'Elective'
  
    case 'gcom':
        return 'Communications'
  
    case 'gdiv':
        return 'Diversity'
  
    case 'ghis':
        return 'History'
  
    case 'ghum':
        return 'Humanities'
  
    case 'gmat':
        return 'Mathematics'
  
    case 'gscl':
        return 'Lab Science'
  
    case 'gsoc':
        return 'Social Science'
  
    case 'gtec':
        return 'Technology'
  
    default:
        return 'Program Requirement'
  }
}