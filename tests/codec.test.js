import {BlueprintCodec} from "../blueprint/codec.js"

let blueprintStr = '0eJy1l91ugzAMhd/F1+mUBLoWLvca01RB622RaEAhVKsQ775QumqqphVb4Y6fHH+2TjgKPZRVh40z1kPeg9nXtoX8tYfWfNiiGp/5c4OQg/F4BAG2OI533hW2bWrnVyVWHgYBxh7wC3I1CL5YD28C0HrjDU5t/K0Q0NRtWFTbkRGEq+RpLeA8XYR6B+NwP72X14rnne2OJbrQori1ZZturBam9q6udiV+FidThzX9MM5BpuvHdL0cXT2mJ8vR5WN6Gp2uCb6vl6PP8P15OfoM3zfL0Wf4vo1OVwTfs+XoM3xXcjn8DONV/LRTBOdV/LiTlKiPn3eS4n38wJMU7+MnnqR4Hz3ySNZHjzyS89Ejj2R89Mij+K5nJl4463lTXQ969xttwoXT5E+HDt+NxcMqlNo79Ahj9/eqlKWaWJrFoqoSVoeapUpYHWqWSnE6lKyxFKdByRGxhmJ5xZqJ5RRrA7K+K9b2Y31VyTUZOSiqamJJDupfUUjDy19y/uuPXMAJXXspo7cq3WR6k+osS7KwXaoiJHVY/XJbPQzfwhFAyg=='
let blueprintStr1 = '0eNqdne1OHDcUQF+lmt+kGn+MPeZVqqha0lWFBAtaoCqKePcCaUKk+sz49FdCEk7MxT57fe/d4et0dfN0vD9fnx6ny6/T9Ze708N0+dvX6eH6z9Ph5u3PHp/vj9PldP14vJ0uptPh9u2jh7ubw/nT/eF0vJleLqbr0x/Hv6fL8PL5YjqeHq8fr4/fMO8fPP9+erq9Op5f/0EXcDHd3z28fs7d6e3/e+V8iulien7/9eXl4j+UOEqZtyhpkBLqFiWPUvIWZRmlhC1KGaSsW5A6CFm2IOvod2gL0sYgmyEJ8xhk87sTBrft5kYJg7s2bG7aMLhrw+YBCoO7NpRNyuCuDW2TMrhr4+ZeCdWaZe5iPjbu4cuXp9unm8Pj3bmrll+/H4DX33VRbRAV1j1UnEdRZRcVrK+6cYpxdEVhd0VpENV2SXmQVHdJi5RgP0hFWrBPqU6DfcjqNNiHDO7o3U2YBvfz7sFIYQwUdk9ritKr3Qilwb0clt31DO7lsLuX0zJI2j1fyZq6H6OqFftmyC7qp139dPXweHj/9C3DIqlpwxIqz1qNiApWjUiKY5Gqu6A0BNqPUpYKQNBiFYCkYg8vkupQkMJ+tFd7dpHUZH4UaveeMvvDW/orWoLOjxAV/eklVJL5EcQpewnQihYtASIVmx8hSV4SIUjylggUd03sQ4q7JgIkyPyIwluilSOBkpYjkbLLjyBCi1YsrafY/AhJVTuWSKvLjyBG2tS5W8aZZZEMMEFWyQATrVb7mCTrZIDJrlAGFHlJBIq8JALFXRIB4i6JAGmqVtaHrLOrlQElSGf1KdHVyoCSXK0MKFkapk9ZrGFCF1N8Lhj65lyrzwUJtfpckFDNSqsbp/Y/LoSwouYvhESKOhckUpIa7AcpSw32KYvTYB9SnAb7kGpzQQrvanNBAjWdCwIpzLMUa+hjgs4GcUVRp4OISjofRJTVNcTJ+nrtY7yvG31h3teI8r5GlPV1P07B+5pWFLSvkaR9jSTpawiS9DVQnK8B4nwNEOtrDK/1NYK0r4kUpa77EYra1rgeLWskaVcjSaoaYrRoxVZaULG9DSRVbVhErVqNiGpWjUT6qZs41ttAUHC9DeTY8h2CdPkOSdkeXiQtsreBoGLPLpLs7AdgVlkxA0yTFbM+Js8ymQFMkBUzwERXMQOKTD2AMtpbid83zgIbZ7R3+GneJY1u5l1QVckMQFZVgwNIczW4PmWRuQdQgqvBASW6GhxQkssUgJLtvFofs9hR2D6m2FnYPqba4bI+ZrXTsH1Mk+Ow/enE0dvgx0gPHO3R9uCHtxKRovUWkpL0FoIGpZx3o7S4Wds+pMhZ2z6lypmwPmWVs7Z9SpOztv0h2VlOcPUpwR4JGpGtoxs5/ai1EeljI5/vru7u786PW+cBFzS4jePuehZ5HnBFxb1Q9EuItbrXCaCs7mUCKLJM16ess3uRAEpQrxEAifI80KZZkzwOtGlWuY2RI3cxfmHFSB2iXJXTAbIqpQOkKaP3IW1WQgdIUD4HSHSGyX1KcoYBSnaGAcriDAOU4gwDlKoMA5BVXZwB0mT+GendKLNMPxEUXPaJnGguzbnPSEZRwMhKUQBZlKIAUpSiAFKVogDihuIAYrdupnc/2a2LILl1kSPlW/uUZPsOhdaTZdsBQYvtOiCpOJtDiKptXeB6Vtm5QFBzjQvijPb3/n116Mdn+I2BcQsSTT8XGMnIHBhZdXIwsItr5CCnyD4OglxFAoKzyl4Qrqa5VhBxRt8OGPYOVHLpcD88SRo59N8rmbSSV/qqsh22QZJ2MpKkkylIWsq4ICtlBDU5aEOg7KwMEcpOy0RRXiaIEjNBspuzwehKNSPHqhlBTs0UHutmXE6TMzYEWqycESRrFf0ADb/V74dWA77HP1mvMipbsTJqsUpkVJFOZFKVUmTS6s4/g5oTAIJGG3xhd0MVOyHHJDshxyQ7Icck2bEO/Uc3FdmxJozsWBNGdqwJIzvWhHEda6BUmXgARSYeQHGJB0Bc4gGQrFoQAFlcDwIoxaUKQKmuCwGU1bUhgNLca3ufMtzS+26Y0scEnSLANFYc7ux9pAiISjpFQJR85hzFyWcauCKdaSBJZxpIcj0TClJzGuxThpt9m5CgNAiQKPMvCm9LMv9CULb5F5Jc54QiZB8Dw+upNotDkn0ODJOkqUv/+V36MTCh0qPAgmw4MEk/BYZRSasRUdmqEUmLaxcwqKjqOHOqVACCVqsAJDV7eIkUZlfcZlCwZxdJtjLd+hhdmQ6NVqRL04zStWlG2eI0xEkXp3lFtjrNJFueRpLsGkKQZNuQKO6aCBB3TQSIrE9zeGWBmkG2Qs0kWaKGCNkSNa/H1qiRpDuITJJV6n6MbA8xxj5GztQRRg7VEUZO1RFGjtURxs3VEcVdEoniLolAyeqSSBB1SSRINLUygiRVKyOKe+4cURZVKyNKUbUyolRlmDfK54tvP33h8qcf1nAx3RyuXj/vcgrrq2t/eWf9cjifD8+vf/fX8fzwjio5x2VuLZb88vIPl/qIzg=='

let blueprintCodec = new BlueprintCodec()
let blueprint = blueprintCodec.decode(blueprintStr)
console.log("blueprint", blueprint)
let blueprintStrGen = blueprintCodec.encode(blueprint)
console.log("blueprint", blueprintStrGen == blueprintStr)


blueprint = blueprintCodec.decode(blueprintStr1)
console.log("blueprint", blueprint)
let blueprintStr1Gen = blueprintCodec.encode(blueprint)
console.log("blueprint", blueprintStr1Gen == blueprintStr1)