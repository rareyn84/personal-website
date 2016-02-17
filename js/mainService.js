angular.module('personalApp').service('mainService', function() {


    this.lifeImages = [
      {
        imgUrl: 'https://lh3.googleusercontent.com/DxV38GSt-2GmNP6ByEox3BlPoKx-XNdDStIJLCjYwoBMnvJ4xc3elrcouyLw78ZDELVJQZfBsSTSLCpuZ6W5PX8BKuO3YUU9Wg7wsePLfA80slDPGjXQpxoQr4TrW6Z5mWBwRInZ-iniB4k6NCIq2D-V_Pl635dQeFszVv5XgwjZP1pQs81QOKPK4_nKWFw5D5MBqfxDnht9bvR9Gh9ymoqDs1moPbpvyoI-dJ3HreTDVN04yPod8uRvKvhxWVUu8anNGXkd4UUUjKXXt-k_qMWEFpCHHAmflA-IC5NT4lBAG9DVWtnfYbJODqRkK0fEHThZSK_u-alaDbaSKT-ujGAs2UUUbvnKldhYiQc7VF5OLHGFtqyljg9K5BU08fNvQlFEyjx4dZeeWYJvF_02qpJVoFsR5rFmOWBajhk6_iQ5_z1dVwBGOimBDs5Of2SIGI-tpfMkQsqXdZ0n693nmEgJyd6po12pRj168KyKzyAODsPs8IIX8kcXAhbH0LUoA73hn8WwtUywF6NsB99_mgZIsLMzGY9-UEM_MkQIElplQKUhXddtm_swPEJkQ6uZqRzH=w972-h729-no',
        imgDesc: 'The Z'
      },
      {
        imgUrl: 'https://lh3.googleusercontent.com/fDKX4FKAnPR8oGCE-tv7oilsR4tIaMPD6yBHmcWN-kAKB9sbfgMvHPp06MT1w4f9dvcgT-TcAWijDxw7lSHm69uENUMfhZe9v_T8o5WidsA6L9v0cIohKAsCb_7YRuJt7p9qplHpL2G-fplvvRjsxsPFlRZOtCm2B-TR8cTqvI8TfbBvYqhyh46AKrn3OpOv9zgXrlb5RaEPqo5bD7qroL5z2qDghCzar_MMxggNxGBL5AZ9X4NoLDHulNF3t4Q3FvufZYml9W876En0JzrjCllRlz6L45yIs5xTbkc3NFHhmiNJokhrPQ3g9aAFkY7v-bmzFVPh0fdsaVmib69IXUaXzQlSSlmxKBXnxEYcARid7oE69G9wj7IFGUG2iUxzilBKqkN7LZXs_ZyP8DQyDPS6FAquG1k8bmyBjhquSLxp71mEnYpN_YnQM5ZyZ4obNRRCQnw3v4fykXazhbbX-SIGpW5hVTsOT8u0EADrxtJfGGJ22BeL4VdE56cSEg0qI7z_dHSa59WBon2s1ARKun5ejx78Owwgym-6ExONZ2xCnisZoFdSBKEEGTqP0-vI20vH=w547-h729-no',
        imgDesc: 'Unicycling'
      },
      {
        imgUrl: 'https://lh3.googleusercontent.com/Q3xFwybv8qdKfcBLp8JAmrP3JPaYt165V3FhUUTn25xWPUYCXQpP7aFq4qJJDfuN5mcHVoYj7vRHRZoS6LYPG_1nhsYcnE8TfyNJU7ZDM9ys1nepA8hwL2ILk41md8X6qLsYsNZIv6moSZADvIq1ha2v7qNGlZelJXEPEZmtoqkwxW4MOytAFQbbBtGyZXbzLYjfi7Wyr_bfm_wAn44FjQpe59E9yC5nU_QNdwZwSywRfD_jxrl417QfSdbD1QbyJx677BpuimeGmm33sHxwLf203E9Yrj48LUBpwEkGOy0N5HpqpWnNw0QbM2tGDpbNjF2YQu8RUdw_-pj8HuQWJHKwFgqdfu9ejpXWzzkvyb2ZnEp9u9XcvRlsFf9i31zsZZgcFrm9XTJTg1qpAYhJj7FqVcUozs_rmm8ewUFWendHg7BOUjdJ5a84myNv5b5MgoY1Cf3gibP4P9Fgkbx41pR5kprE813haanX55y5vX1V3MxBT3FXr-zh5iQ2v6qCRFq1f0YFSbd0yNcisDD66UL53MNVUJ67sZ0X64lW4Ak=w547-h729-no',
        imgDesc: 'Steak'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11899966_1629563677312468_6957845522263252560_n.jpg?oh=500fb01ac289086b30a1ae8b63e7a84d&oe=5702FAFC',
        imgDesc: 'Family Reunion'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/1934931_61286617766_6128178_n.jpg?oh=e210fbf3162b7c5d09dbe06c65c758e7&oe=5700862D',
        imgDesc: 'Sheep Dairy'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1934424_681287946509_3571659_n.jpg?oh=30198e33127fdeb00f082613d588cfce&oe=57131D7C',
        imgDesc: 'High Ropes Course'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/45435_427247357766_3995493_n.jpg?oh=dfaf8b6d18eddd9af8ed9bfeeb293edc&oe=570547B6',
        imgDesc: 'Oregon Coast'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/479716_10100523761055619_917585368_n.jpg?oh=53542f0eb5073706303487644b8acb8c&oe=5701C985',
        imgDesc: 'Married!'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/21175_10100835379596324_3332737840329110157_n.jpg?oh=54fa8e24bf14ea4336df8ae4516aa743&oe=5707B08C',
        imgDesc: 'Daughter'
      },
      {
        imgUrl: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/599962_4831058545464_959638933_n.jpg?oh=672691a5cbeb8fd1ac963604c867982a&oe=57063244',
        imgDesc: 'Cousins'
      },
    ]
});
