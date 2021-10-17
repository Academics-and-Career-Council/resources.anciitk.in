type subItem = {
  id:string,
  name:string,
  category:string,
  link:string
}

type item = {
  id: string,
  wing:string,
  title:string,
  category:string,
  items: Array<subItem>
}

const resources: Array<item> = [
  {
    "id": "6164a47e5c8cced71c77bedc",
    "wing": "career development",
    "title": "Resources From AnC Council",
    "category": "DOCUMENT",
    "items": [
      {
        "id": "6164a47c5c8cced71c77beda",
        "name": "Career Handbook Part 1",
        "category": "GDRIVE",
        "link": "https://drive.google.com/file/d/18t9_06CrGNKXLRMdxw1_asK4bQo70XSX/view"
      },
      {
        "id": "6164a47c5c8cced71c77bedb",
        "name": "Placement Guide Part 1",
        "category": "GDRIVE",
        "link": "https://drive.google.com/file/d/1MWtqZGNT8GWQ7HlbH8dZyFMiMG4mzAzU/view"
      }
    ]
  },
  {
    "id": "6164a47e5c8cced71c77bee2",
    "wing": "career development",
    "title": "Internship Preparation",
    "category": "DOCUMENT",
    "items": [
      {
        "id": "6164a47e5c8cced71c77bedd",
        "name": "Coding Test Resources",
        "category": "GDRIVE",
        "link": "https://docs.google.com/presentation/d/1X1AVPuiAzdNVh7TGcJ9wf74sNVhe08xi59QYNidfTKE/edit?usp=sharing"
      },
      {
        "id": "6164a47e5c8cced71c77bede",
        "name": "Finance Resources",
        "category": "GDRIVE",
        "link": "https://docs.google.com/presentation/d/17fYhRpNYE3vlSV_me3d8GzJbXsDeBt6CW1GbRgtPFSg/edit?usp=sharing"
      },
      {
        "id": "6164a47e5c8cced71c77bedf",
        "name": "Quant Resources",
        "category": "GDRIVE",
        "link": "https://www.dropbox.com/sh/zf0curmnh7ke9vz/AABXvvX3xGYdJqvTU_sH0fI3a?dl=0"
      },
      {
        "id": "6164a47e5c8cced71c77bee0",
        "name": "Product Management Resources",
        "category": "GDRIVE",
        "link": "https://docs.google.com/presentation/d/11UfPnYrsrlV-3faryKuyUIv9d3p8VU1A74Hqa9R45to/edit?usp=sharing"
      },
      {
        "id": "6164a47e5c8cced71c77bee1",
        "name": "Common HR Questions",
        "category": "GDRIVE",
        "link": "https://docs.google.com/document/d/1zMKWYonYPTEAatNfqiLqdg8-BLSYq9SQ6NPL5vtdkL8/edit?usp=sharing"
      }
    ]
  },
  {
    "id": "6164a47f5c8cced71c77bee6",
    "wing": "career development",
    "title": "SPO Preparation Material",
    "category": "DOCUMENT",
    "items": [
      {
        "id": "6164a47f5c8cced71c77bee3",
        "name": "SPO Preparation Portal",
        "category": "GDRIVE",
        "link": "http://spo.iitk.ac.in/preparation/"
      },
      {
        "id": "6164a47f5c8cced71c77bee4",
        "name": "Internship Guide 17-18",
        "category": "GDRIVE",
        "link": "http://spo.iitk.ac.in/preparation/Internship_insight_2017-18.html"
      },
      {
        "id": "6164a47f5c8cced71c77bee5",
        "name": "Internship Guide 18-19",
        "category": "GDRIVE",
        "link": "http://spo.iitk.ac.in/preparation/Internship_insight_2018-19.html"
      }
    ]
  },
  {
    "id": "6164a47f5c8cced71c77bef4",
    "wing": "career development",
    "title": "InternGYAN (Core)",
    "category": "VIDEO",
    "items": [
      {
        "id": "6164a47f5c8cced71c77bee7",
        "name": "Mechanical",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/Rwu-tVdhcOI?list=PL8_ALs6__lmzVNdn__iPx9VhDFGSs6xGb"
      },
      {
        "id": "6164a47f5c8cced71c77bee8",
        "name": "Aerospace",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/cLDLUhXOZ5U?list=PL8_ALs6__lmy53m3hZT9ukNqOsrsUF5_o"
      },
      {
        "id": "6164a47f5c8cced71c77bee9",
        "name": "Computer Science",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/h8PRy10RjYw?list=PL8_ALs6__lmwqzdayb0F0GoaokHpvBGsj"
      },
      {
        "id": "6164a47f5c8cced71c77beea",
        "name": "Electrical",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/x9G2kNN5WIc?list=PL8_ALs6__lmwHZqvJaf3V3McWjCLyCnSE"
      },
      {
        "id": "6164a47f5c8cced71c77beeb",
        "name": "Economics",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/R4LmTsXfk40?list=PL8_ALs6__lmzb-KjccOLIx5BgA2qpyDRc"
      },
      {
        "id": "6164a47f5c8cced71c77beec",
        "name": "Physics",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/VD4BkxwmvkE?list=PL8_ALs6__lmw6CLnCMBKS7KtCX9c3oRqu"
      },
      {
        "id": "6164a47f5c8cced71c77beed",
        "name": "BS-BE",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/0b_9hxkBmb4?list=PL8_ALs6__lmyXxhx9zAfN5iX6a4uZQxCi"
      },
      {
        "id": "6164a47f5c8cced71c77beee",
        "name": "Chemical",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/t-ZxHwawV2k?list=PL8_ALs6__lmyJD-vM_yTPEEPw0V1aalP8"
      },
      {
        "id": "6164a47f5c8cced71c77beef",
        "name": "Earth Science",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/525xFYimSBE?list=PL8_ALs6__lmzsrAGhrQ8EJgPjJ0Jur6L0"
      },
      {
        "id": "6164a47f5c8cced71c77bef0",
        "name": "Chemistry",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/UcKE_YbMJac?list=PL8_ALs6__lmzKBMx5YD29byvWzM4b9Fm0"
      },
      {
        "id": "6164a47f5c8cced71c77bef1",
        "name": "Civil",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/9EmQ_6YJKBE?list=PL8_ALs6__lmwSHaETL9_GVvqzfq4myLPO"
      },
      {
        "id": "6164a47f5c8cced71c77bef2",
        "name": "Material Science",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/y71rMdjCPqE?list=PL8_ALs6__lmzNc9se-V7K38iKW-cRwIBE"
      },
      {
        "id": "6164a47f5c8cced71c77bef3",
        "name": "Mathematics",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/whVrUaQQwUo?list=PL8_ALs6__lmzIFbGPzPLb29jQyPOFCy_0"
      }
    ]
  },
  {
    "id": "6164a4805c8cced71c77befc",
    "wing": "career development",
    "title": "InternGYAN (Non-Core)",
    "category": "VIDEO",
    "items": [
      {
        "id": "6164a4805c8cced71c77bef5",
        "name": "Machine Learning",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/m9r7D3BaTzs?list=PL8_ALs6__lmzg6fUDjSWoix--wlMJq64A"
      },
      {
        "id": "6164a4805c8cced71c77bef6",
        "name": "Analytics",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/gI50lrio3b8?list=PL8_ALs6__lmwDp56yvz7M8KET5enPOq1a"
      },
      {
        "id": "6164a4805c8cced71c77bef7",
        "name": "Quant",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/JGmh6n9fTlo?list=PL8_ALs6__lmxqxQAc7OYNB8LqWGOeENRN"
      },
      {
        "id": "6164a4805c8cced71c77bef8",
        "name": "Data Science & Data Engineering",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/NgAbCy4xiMA?list=PL8_ALs6__lmxFcOweN2On97Avog87NAtQ"
      },
      {
        "id": "6164a4805c8cced71c77bef9",
        "name": "Finance",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/Ox7Nu0t9Tg4?list=PL8_ALs6__lmxXKX7V63Kny5VxWlZisD5-"
      },
      {
        "id": "6164a4805c8cced71c77befa",
        "name": "Software",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/N95Ke-uH6xU?list=PL8_ALs6__lmwi5eyfL_4Qc90MciGCNkjv"
      },
      {
        "id": "6164a4805c8cced71c77befb",
        "name": "Product Management",
        "category": "YOUTUBE",
        "link": "https://www.youtube.com/embed/Jq4YQiOugG8?list=PL8_ALs6__lmy0EmOJb3zjzyFbx8vI0hYo"
      }
    ]
  }
]

export default resources