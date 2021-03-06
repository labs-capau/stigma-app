import { Injectable } from '@angular/core';

@Injectable()
export class AvaliacaoProvider {

  constructor() {
    console.log('Hello AvaliacaoProvider Provider');
  }

  status(professor_id): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve({
        'turmas':[
          {
            'turma':'Informática 2017.2',
            'curso':'Informática para Internet',
            'resta':15
          },
          {
            'turma':'Agropecuária 2018.1',
            'curso':'Agropecuária',
            'resta':9
          },
          {
            'turma':'Administração 2018.2',
            'curso':'Administração',
            'resta':50
          },
          {
            'turma':'Mineração 2016.1',
            'curso':'Mineração',
            'resta':0
          }
        ]
      })
    });
  }

  next(professor_id, turma_id): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(
        {
          'aluno': {
            'nome':'Aluno: ' + Math.random(),
            'img':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX17uX////yzqUeHyQtLjVrNj7UsIzhvJC7hmAmJibMmHL27+f30qgAAADpxZvTrojt4NGjcF+4gVsoKjPmvpaealr71ar79OrhupYcIi4YHy0iJjD49O78+vcYGiBEMDMAAAs6KS5lLTkaHSeahnEAAA8WHSJeVU+vl33lxJ7ApYgLGCk1NToXGiVVTkqSi4WwrKfBvLYLDhbl39dgMzpLLDPPsZDr5Ny3qqvSoXt9bmBzQEScmJUvLjBdGiZVLzY9PUN9eHRjYWNQT1Pd3NzGoIHWz8dIQ0MtIym5kniCUk+blI6AXF5kJzGRe2gKDx5vY1kpCRkAEijUxrhxSU2ZfX6QY1puYFVwbWsdERpdWliciYq+tq5JHCashG9ZWFtaUEQ+OTPz3cT/CX+/AAATAElEQVR4nO2deXsaR7aHWYTGcjdS7FaapYHBAklsAoQyKEI4AS0Q2zNIk0wiLtfXsef7f4hb1WtVr7UcbD3PzG/+8JMeaPrVOXXOqbVT6e2rWq1WkBSsVCpl/osvVKtf4cfTqa3eHZFhpjgp2ybdFiEyWxIbzbk1zK0QVioccKQ1t/Ew4IRVITrCltAPBEsoh2cLGBKQEATPkgIICUUIiGcJzJIwhFWeuMkqIENCEEKbzxNEcJUmBHdPH6O0ISUJt+KetGSdVYrwK/BhydlRgvAr8ckyihNut/0FGL864dflk2EUI/yKDupJMOQIEX59A1oSMqMAYfUb8WEJmJGf8FsZ0BK/GXkJv6UBLfGakZPw2xrQEqcZ+Qi/RQgNii+o8hB+ew91xIPIQfgcPNQRh6eyEz4nQB5EZsJvjeSXAkz4Tcq0eLHGGzbC5xNjSLEhMhE+T0BGRBbC5wrIhshA+LyCKC2GkJpMCASoFAgpYIErGTGREAAQwaUuF+fD6WA+X6/ng+nw/OISXQTBTERMIpQGLBQuF9P1rfFw1mgYlhqNs7PezXy4SEFQJiEmEEoGGYQ3vOmdNQxtxy/NaJRm6+GFPGRCuIknlAMspM5vEF0AzpPROLudIshtIsYSSgEWLqezs6DtArZsPNx8vJQzZCxiHKEMYCE1nJ0l4tmQZzNkyG0hxhFK/F0Li9tGsv0IQ2qDSwnGuDI8hlDiB5XpAwefKeNhKsEYgxhNKJYnUDpPXSzWrA5KqtEbisec6JwRSSgEWCgspjfLnhEXP2N0diPeHCMRowhFogyKLreNhsbrn4QMYyiMGBVtogj5f0FRhjsM2SFBD+uUaICLQIwg5P+VwsUNxaeF1DEsatyKempEtAkn5G+EhXOq8Wndx0m/3C0JUBqzhSBieFMMJeRvhIXpA/mUpf5YV3V13FyW+IOOpokihvppKKEAIJkeNKOpqhkkVdXHk50SP6Koo7IScvsoDWj0xnrGkaq3m9yM2uxSLNyE+WkIIbePFs5JFzWWbTVDSm03eX3VuBEMqCF+GkLIDXhBxhOjn6EBkfT2RONjPBuA+WnwErePKjfE04cBYjsWJ2UuxodzMcSgnwYI+X10SDRCbRYKiBnHj10ORm0mBBjipwFC7gZwSTy3ttOOAMQxZ/yYaEev5GtMxYwYyPt+Qv44Omh4D1jqRAJajBMtNq5qs6XXpi/Eoo3fiH5C3vspFyRgMw7QZGyveuXIQqfcb49dKzeAgo3vv6VMaJwmAJqQ7Va/G1azaqVyE9UIzbJ7O0EjVuII+cu1y573sOV2MqBpyGJzaZQMuk4v95ptXCjorp8KG7EaQ8hvQiKQlpN8lIBUx63HpdYtl0pGqVQua/1JJ2MVQurYNWJDDNBnRIqQ34TKjWsJbcnKZ0Nm2uNWE6s1bmd096+jTpymeCbaHa5GEnL7PRlnyrFxNILSFnWx6BBqf0J0o0hCgU7T0CXU+tyAEdJdIxoLgPKUJBTo2K8NCRNGyTWiaNan0j5BKDD4VPBaYQ8MMKM/2ojajei4VDWUkH/oQlm43abEZM8hddx1bnshSFgJJeS/D5Erumy5kE163/aNM8EeBlnYpCRMiAoaN+yFljP7rPIbsVWWbIiEEVMSJkwV3GwY7qT7f2GU/4ttzWmIwrNDQUKhQe6Z2wyLYd4mTOhlfVFAL9a4hEJ/rIR6RpywY7vpg2io8RJGSsKEijtAYzyGRlJhwky754QaYTet+ghFppqUheNLkLnClP5o/fEa4jM1FR+hyD0KLmF5DEyotkqSwdSNNSlxJ0U2dKpSbQwLiCo3i9AQ7SOmXDdNiTspQdiDzPemdKshGnPpme+UuJN6hNoywUnZEj1FaOUL8co05bhpStxJSUI95mEzkUE15ht2WSNFWCUIxUKyG2m0Pjhhpm1W38KdYKwKQSh2B2XhFFen8IQZc4hLijDlEYoufrrckSI8jPuKamZEKS+13DQlHEmRlB4joYDUJm4CxlqGsOISit6hMNO2R2iWpjLZws4XcoQ32yPMtDFh6YPUij6HUHgdsNMD3g4hDjUSdSlWRZrQHkzcCmEGD2UIDwrThMI3UBZn2yM0R9zOREdMbVmEMgtlHwAI9/cPD0MKOHWFCB8upQDlCQu3WnhNc3hwdfUS6+rqICbt7R9cvXzx2tSLl1f0B60OlBwgzogpqQ0HdqihCdVDC87TVTjkIaJ74QlRXu17JTyehJIYibJUMQllFjt/PAsQ7vv5LEZ/70M9pPBsyBcHBKEh1T00pZiEMnew5p5IwmIIn8noI7x67VqO+OfF65fuJ9rSoTSFG6IkYepPjSY8cIAOiih+HB4WD65CEV++tmyGmqnZVUQN17GpE3XaPelQahHKbaqYNqj+oQ14QMbG/WIQ8aXjk0S7Q+3SYnQuLLWZZCjFoSYlt7OpsKAID0Md0gH3rpsorw8CbfPABLc/p/dLUnW3qYosYUrB+cIltAzoPrBHYKE7IfXAtJUXfNwPovCDm6T1Of30QboZmoRynm66qWfDK89SamY8brvtc58AzLygAPX2eOx66yFqmvbn9MeGdDNEwTQluQ1duTijx2kcDLXz5eQkO/Gue3kAm5Bw0Un25OSLO4PspU59PpM2IQChOdEdMtamdkZ7SKPP/v/DMaH7jc8184PBSXJ9LjEc7Cqdkt3GrJw/4BWJAX3ZMzVqBZ5834wyzl+iZf4l9rJfAndQ54KLooAJcawJISweW4TZSYDwEDup68xPWeuDx4H5OVU+ziBV5QkLwzOtF3i68cgmfGIkHAWnPoT3ltCEADuZb43gqH7bJqytEghXJ/YHgxMDMDuhAQiREYOE6sRuX8HJYYowM7YIR0Fvfj6EqJe4EzTA/udRNlsLCZE+QhR0T7LZsJj772dEuHgImXtSW0+fV2GLomnCjNpefX4KRlw4QojbFOZh84eqrodOSfkIIz8IQ6iAEKYueeYPA4QRelaEKQ5AZsLvnhOh8u9tEEI82X8AIZC2QgjUgGD0X0Ixwuck5TdwQrUN9GhAkWbRZJ+5YLSh1Pw29XAgN1k8sK/7YiLUn4AIoWx4EewiShGqrV+l5reJR4Mi7JVCuj/ChGpRE9715H80iL4F1lIrh/UPRG3Y1yTnt12B9J6QCn9qO0aRDfEQTxfGEuqrssQyfVpghDca876g/YODw/jFQp3uzk5DfHUwJTBCvD2ovIKZzrdWYciPd5uqyI+1mSrM8WQwzN4n9dRcDQVECDCaaKrwAU+6axArae19spr0xJolMEJrZY0RHB3lBhzbu72BSpqq9LyFpcK5tbKmzFG9RcjaWKwBzMqYkp+ZsaSc28uFu5Kr9p2deVofjhCoMHUXREsBunu6DKiyVHoO2LmRt30mUL2F7PV1r/ovFp1jI+SWXXqSn+V2VNhxRFVvCKLdabWardaYwlHb5sVOm6ZU+9IbZH2qyK7FcFXwDrQouwPdamY86eFN96VSudvzyNX2o3t14s1wZ/SJtxcfqCytwhF6e561vgPSIc+H0LqO/6rFnvdho9tv2YzujrUd+UWJjqrSK4YcWQtrLJXM6k1tn/rO+ChPzNF7vd2jrmvlvnWwFHn9AeSp7DVRIH8se4WbjYKqN3UcPD2x1O8gjlbg3EGt29Kdas2+ApQOFdm1iYQuidOwUPWmd8JOo9PKZaMbdkJNd6Xq3qkmkKFUdgWtJyLU4OrNDfuaUSqboogN+5rbTMurMQEIFkqrkIQD0ik1u0kZ3eWk2eqMx+NOyztDqaSt8LVOp9U8NezGqvVIm8IFGrl13qScypRySq3Z1nXneA+9/WTgHFHWVhnvot45DbqtdgvyTM4qaKiGOAsEEPLwPTPfjTvNZrPTpq6q+iqAWAIahpLejUCJdlPzOQMdYmQz9L/A1VP/3wasg28TAjXERYN+TN86oiItkrDlM6K2gepYyO4KokWUNdZzUqu/X31P65W3yFalwuiOzHEYPknvXaNFnHQSIFTvv39F6/t7NYpQuwUC9PauAb2EpDCn/JTsKsYTtmjCB6BWSOw/BHvVEV1wGkR/P+Cln4gQO6HcG2o8n9xDCvU+NV+woU9aiI40+1SeMaByIbUPGOpdOfRhtDuzwMEzYT172km1t6KnCAdE7uWGclPluwn5tKWJP+PjA9pa9FIwtU2Ve6V7mHU0KXo/PpSbKt8VJ2Ru61LzUerkV7Nj/ytZCagZsmTXdloHUIQV+XMxglK+O9ilEPFhj4GkoM2INDLuEyY0Zp1dMEL6XAwgN8WEu02yn4Q6vbpz9PWje9Jcx+zs42J8pVEfHu/CEaZpQqCkjwl3Oz3CLFp5tuq0cdd+6V0tPeJL49ajQRq8NEFfBiP0n08D46YW4e4u1SHSjHK3XOpSgzYautSlO8XaTrMISeg/Ywho6Nsm3A12iJJUWnasrwIRBs6JAhr6dgh3W73AOFSctPLE/iIUYfCsL5BY4xHu7j5xmNHotYqwhN7ZkFJn7gXvSxAWmzusZiw97XqCIQw7cw8i1pCEu7v3ISMwYQbcae6CE6ZDCEHekkcR4oCT/AoPMwlCE4affQlgRD/hbqefYEbDzhHAhOHnlwIkjAAhMmNsayw/3fu/AEEYcQYtgBFDCFFrjDyE3eg1Ax8HIYw6R1jeiGGEKDcuQ5ujYUxCPgxBSL09QPI8byZCVIz3DYOacdJQQfp4Xwz7LABh9Hne0uE0ihCFnNXTsoSPYEdC/y6fmoEGCEYYcya7tBGjCS3MVnO1WjVbnbgPyRPGnasva8QEQiZJE8a+G0G2On0WhH4i339LnrDwDAiT3lEikTHwO4x/AyD8rSDzBt3E98yIBhuloFx8nO/V30kT3v9zb/7xQhGFTH5XkMjh8/i9zYPNqD6qvXkfmuM4VHz/1xq602awuBQxJcP7nniDDXKpxXDzFtFlkd4cyRrx/uivJ1m8R7r+doPf+Mw5AB6CE7zE7qfIlS4/DvbqxzUTDxPm3ksS/pEzCTFk7bi+N/h4yeOwbO9dY/NT0zU/bOq28VzCo09yJsy5hFnLlPXNB2aHZXx3HoOfmq657tF0FmHuWs6ERxShTdlbf2Ry2FCYsIuxforfdn8+WNaCeBbh0R8SgO+OcgFCC7K2HJwrCaZkf4dlpJ9iusV0kw+lswlzMsHmOhdKaFPmN9OLVDQlx3tIw/M+wkMp70v+OILOIczloroNiXp1FE1oUh7nv8yxw4Y+XzgK4/uATeMNbrORxqMIReMp9tFYQsuU2f6HRYgpo0girlcpOuViuKkdJ9B5hEdiiPfmlxMILcrjGkqWChV7eN/p7DRF7Jrng3jXDBCKId5fsxKalMhhB+eew3K/lxsjmq75YZPomkFCEUTbgrncG9Yfww67sR1W4N3q6TSKK+u3dUbj+QhzR9d84ab4zvlm7heeH0R1z1uULCOiTALhXT7Pbjxbv7jPmTt6xUP4x5EYIYYc5fN3QoTpRZ3ztyhCZEbmxPju2gPkJsxm64sYijjC9HlehhC3RibGd++PyG9xA+bP4yBiCdNTXkSaENvxU1J7/ETz8RPmh7EM8YT8iDm/jo7eR0PeI7wj/zeYkgUBOI1HSCBMD/gQTwKEJuT1+1ef3t2ToPf37179cR3Ey+V+4CPMDxIIkgjTcy7Ekx/CEE1KBHN9/d7U9fW1dSFMP3MR5udJAImEfIgnP0cQsutvPITJgAyEXI568jdpQuaSJsvgomyEXOHGH0z5xZEOk4IMMyEXojQhu5MmpAkewvR5nbV8iww1rGIOpbV6bKLnJEwvaoyI0qGGNZTWsnGlGj9h+u7tiO2X3yRDxIox0IzexhTbQoTp6oaxDpckZAs09U1Ul16cEGcNFk+VdNMfWPhqLFlCgBB1NVgQ5dyUJd/XRmwxhp8wfdc7ZkCUImRohsc91ibIT4hLuEQzyrlpsgEZCjUZwvT5XmJMlSlrEnPFaI/HQ0UI05WbpAJHJuknRdL8OnpQDYoQB5wEM4rHmoSCZhQ/XgFGmK6s44s4cSPGRtJand+AgoTIjL3Y9C9sxLib1mcCBhQmTFenca4qasQYE47yU+YqBoQQu2oMo2A4jeETclA5QpT/N5HJUSwnRpmwlt9w5XgwQtSn6kcywpkQ8TH2k7ZAiELOMpzxRCDYhJqwll9K8UkTIjtu6mHtkd9Pw3LhqC7jn0CEqD3Oa2FTcLyEgXKmVq/NpflACFFcnb4NBFZeP/X76Cj/ZSocP0mBECIt1nlfocM3dEr3fGv1/Fqy+bmCIkSGHG5GFCRXU/yFxBtthoLpPURwhEh3Q7yYyHtW9tLmjeOjo3r9ZgjQ+jyBEqaxJdf5vLtWkRXQbIS12nE+Px+CND5C0IRYd9N+1lqzyFi9/XyC1yBmT2GNZ2sbhEjVu+H6Npuv/0/EFBqho3/8Xz57u94KHdaWCE1d3g0H6+uffvoHUpD0CF/+6afc7/87vIP2TFLbJDRVrVYWP/744+9//9c1gXf9r7//jq4uKlW4oBmh/wfOmvC+Nqz6kAAAAABJRU5ErkJggg==',
            'curso':'Informática para Internet',
            'turma' :'Informática 2016.2'
          },
          'justificativa':'',
          'criterios':[
            {
              'descricao':'Relacionamento Interpessoal',
              'nota': '0'
            },
            {
              'descricao':'Disciplina em Sala',
              'nota':'0'
            },
            {
              'descricao':'Participação em Sala',
              'nota':'0'
            }
          ]
        }
      );
    });
  }

  save(avaliacao): Promise<any> {
    return new Promise((resolve, reject) => {
      if (avaliacao.justificativa) {
        resolve(200);
      } else {
        reject(new Error('Error'));
      }
    });
  }

  previous_list(professor_id): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve([
          {
            'turma':'2017/2',
            'curso':'Info p/ Internet'
          },
          {
            'turma':'2018/1',
            'curso':'Info p/ Internet'
          }
        ]
      )
    });
  }

}
