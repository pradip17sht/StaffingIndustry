using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace StaffingIndustry.Application.DataAccess
{
    public class DataAccessHelper
    {
        public SqlConnection _cn;
        public string _cnString;

        public DataAccessHelper(string connectionString)
        {
            _cnString = connectionString;
        }

        public SqlConnection GetConnection()
        {
            try
            {
                SetConnection();
                return _cn;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void SetConnection()
        {
            _cn = new SqlConnection(_cnString);
            if (_cn.State == ConnectionState.Closed)
            {
                _cn.Open();
            }
            else
            {
                _cn.Close();
                _cn.Open();
            }
        }

        public dynamic GetJson(SqlDataReader reader)
        {
            var dataTable = new DataTable();
            dataTable.Load(reader);

            //convert Json column of first row to Json
            if (dataTable.Rows[0] != null && dataTable.Rows[0]["Json"].ToString() != "")
            {
                return JsonConvert.DeserializeObject(dataTable.Rows[0]["Json"].ToString());
            }
            else
            {
                return null;
            }
        }
    }
}
