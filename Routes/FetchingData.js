const router = require("express").Router();

const Product = require("../Model/DataSchema");

// getting all products

router.get("/", async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $sort:{
          id:1
        }
      }
    ])
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/", async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $sort:{
          id:1
        }
      }
    ])
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// getting products month wise

router.get("/month", async (req, res)=>{

  
  try {
      const results = await Product.aggregate([
        {
          $project: {
            _id: {
              month: {
                $month: "$dateOfSale",
              },
              id: "$id",
              title: "$title",
              description: "$description",
              price: "$price",
              category: "$category",
              image: "$image",
              sold: "$sold",
            },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ])

      res.status(200).json(results);
      
    } catch (error) {

      res.status(500).json(error);
      
    }

    
})
// getting total sale amount of selected month

router.get("/saleAmount/month", async (req, res) => {

 
  try {
    const results = await Product.aggregate([
      {
        $project: {
          month: {
            $month: "$dateOfSale",
          },
          sales: "$price",
        },
      },

      {
        $group: {
          _id: "$month",
          totalSaleAmount: { $sum: "$sales" },
          // totalItems: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// // getting sold items per month
router.get("/solditems/month", async (req, res) => {
  try {
    const results = await Product.aggregate([
      {
        $match: {
          sold: true,
        },
      },

      {
        $project: {
          month: {
            $month: "$dateOfSale",
          },

          sold: "$sold",
        },
      },

      {
        $group: {
          _id: "$month",

          totalSoldItems: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// //getting unsolditems of each month

router.get("/unsolditems/month", async (req, res) => {
  try {
    const results = await Product.aggregate([
      {
        $match: {
          sold: false,
        },
      },

      {
        $project: {
          month: {
            $month: "$dateOfSale",
          },

          unsold: "$sold",
        },
      },

      {
        $group: {
          _id: "$month",

          totalUnSoldItems: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/priceRangeMonth", async (req, res) => {
  try {
    const results = await Product.aggregate([
      {
        $project: {
          _id: {
            month: {
              $month: "$dateOfSale",
              
            },
            priceRange: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 0],
                        },
                        {
                          $lte: ["$price", 100],
                        },
                      ],
                    },
                    then: "0-100",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 101],
                        },
                        {
                          $lte: ["$price", 200],
                        },
                      ],
                    },
                    then: "101-200",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 201],
                        },
                        {
                          $lte: ["$price", 300],
                        },
                      ],
                    },
                    then: "201-300",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 301],
                        },
                        {
                          $lte: ["$price", 400],
                        },
                      ],
                    },
                    then: "301-400",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 401],
                        },
                        {
                          $lte: ["$price", 500],
                        },
                      ],
                    },
                    then: "401-500",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 501],
                        },
                        {
                          $lte: ["$price", 600],
                        },
                      ],
                    },
                    then: "501-600",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 601],
                        },
                        {
                          $lte: ["$price", 700],
                        },
                      ],
                    },
                    then: "601-700",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 701],
                        },
                        {
                          $lte: ["$price", 800],
                        },
                      ],
                    },
                    then: "701-800",
                  },
                  {
                    case: {
                      $and: [
                        {
                          $gte: ["$price", 801],
                        },
                        {
                          $lte: ["$price", 900],
                        },
                      ],
                    },
                    then: "801-900",
                  },
                  {
                    case: {
                      $gte: ["$price", 901],
                    },
                    then: ">900",
                  },
                ],
                default: "Unknown",
              },
            },
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort : {_id:1}
      }
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


router.get("/category/month", async (req,res)=>{

  try {

    const results = await Product.aggregate([

      {
        $project: {
          _id: {
            month: {
              $month: "$dateOfSale",
            },
            category: "$category",
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          count: {
            $sum: 1
          },
        },
      },

      {
        $sort : {_id:1}
      }

    ])

    res.status(200).json(results);
    
  } catch (error) {
      res.status(500).json(error)
  }
  
})



module.exports = router;
