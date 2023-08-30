import { createStyles, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Rajdhani',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
    Select:{
      styles:{
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        dropdown:{
          background: 'rgba(41,17,23,0.82)',
          border: '2px solid #9a322f',
          boxShadow: '0 0 8px 2px #9a322f',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
        },
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
        },
        item:{
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          borderRadius:0,
          '&[data-selected]': {
            background:'rgba(42, 189, 199,0.82)',
            '&:hover': {
              background:'rgba(42, 189, 199,1)',
            }
          },
          '&:hover': {
            backgroundColor:'rgba(42, 189, 199, 0.12)',
          },
        }
      }
    },
    MultiSelect:{
      styles:{
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        dropdown:{
          background: 'rgba(41,17,23,0.82)',
          border: '2px solid #9a322f',
          boxShadow: '0 0 8px 2px #9a322f',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
        },
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
        },
        item:{
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          borderRadius:0,
          '&[data-selected]': {
            background:'rgba(42, 189, 199,0.82)',
            '&:hover': {
              background:'rgba(42, 189, 199,1)',
            }
          },
          '&:hover': {
            backgroundColor:'rgba(42, 189, 199, 0.12)',
          },
        }
      }
    },
    Checkbox:{
      styles:{
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          borderRadius:0,
          border:'1px solid #9a322f',
          ":checked":{
            background:"#9a322f",
            border:'1px solid #9a322f',
          }
        }
      }
    },
    TextInput:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    Textarea:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    PasswordInput:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        visibilityToggle:{
          "svg":{
            color: '#2abdc7',
            textShadow: '-1.5px 1.5px 3px #2abdc779',
            fontWeight:600
          }
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        }
      }
    },
    NumberInput:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    ColorField:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    TimeInput:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    DatePicker:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    DateRangePicker:{
      styles:{
        input:{
          background: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
          color: '#ff4e46',
          textShadow: '-1.5px 1.5px 3px #ff4e4679',
          "::placeholder":{
            opacity:0.42,
            color: '#ff4e46',
            textShadow: '-1.5px 1.5px 3px #ff4e4679',
          }
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
      }
    },
    Slider:{
      styles:{
        trackContainer:{
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          border:'0',
          borderRadius: 0,
        },
        label:{
          color: '#2abdc7',
          textShadow: '-1.5px 1.5px 3px #2abdc779',
          fontWeight:600
        },
        description:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        icon:{
          color: '#e7b52f',
          textShadow: '-1.5px 1.5px 3px #e7b52f79',
          fontWeight:600
        },
        bar:{
          backgroundColor:'#ff4e46'
        },
        markFilled:{
          backgroundColor:'rgba(0, 0, 0, 0.50)',
          borderColor:'rgba(0, 0, 0, 0.50)'
        }
      }
    },
  },
};

export const globalClasses = createStyles((theme) => ({
  colorPrimary: {
    color: '#ff4e46',
    textShadow: '-1.5px 1.5px 3px #ff4e4679'
  },
  colorSecundary: {
    color: '#2abdc7',
    textShadow: '-1.5px 1.5px 3px #2abdc779'
  },
  colorTerciary: {
    color: '#e7b52f',
    textShadow: '-1.5px 1.5px 3px #e7b52f79'
  },
  container: {
    background: 'rgba(41,17,23,0.82)',
    border: '2px solid #9a322f',
    boxShadow: '0 0 8px 2px #9a322f',
    borderRadius: 0
  },
  btnCancel: {
    textShadow: "-1.5px 1.5px 3px #ff4e4679",
    color: "#ff4e46",
    backgroundColor: "rgba(255, 77, 77, 0.14)",
    borderRadius:0,
    ":hover":{
      backgroundColor: "rgba(211, 47, 47, 0.04)"
    }
  },
  btnConfirm:{
    textShadow: "-1.5px 1.5px 3px #2abdc779",
    color: "#2abdc7",
    backgroundColor: "rgba(42, 189, 199, 0.14)",
    borderRadius:0,
    ":hover":{
      backgroundColor: "rgba(42, 189, 199, 0.04)"
    } 
  }
}));